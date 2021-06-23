package user

import (
	"assessmentRandhikaR/auth"
	"errors"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	GetAllUser() ([]UserFormatter, error)
	GetUserByID(userID string) (UserFormatter, error)
	UserRegister(input UserRegister) (UserFormatter, error)
	UserLogin(input UserLogin) (UserLoginFormatter, error)
}

type service struct {
	repository  Repository
	authService auth.Service
}

func NewUserService(repository Repository, authService auth.Service) *service {
	return &service{repository, authService}
}

func (s *service) GetAllUser() ([]UserFormatter, error) {
	users, ex := s.repository.GetAllUser()

	var formatUsers []UserFormatter

	for _, user := range users {
		formatUser := UserFormat(user)
		formatUsers = append(formatUsers, formatUser)
	}

	if ex != nil {
		return formatUsers, ex

	}

	return formatUsers, nil
}

func (s *service) UserRegister(input UserRegister) (UserFormatter, error) {

	genPass, _ := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)

	var newUser = User{
		FName:     input.FName,
		Email:     input.Email,
		Password:  string(genPass),
		Address:   input.Address,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	user, ex := s.repository.Register(newUser)
	if ex != nil {
		return UserFormatter{}, ex
	}

	formatter := UserFormat(user)

	return formatter, nil
}

func (s *service) UserLogin(input UserLogin) (UserLoginFormatter, error) {
	checkUser, ex := s.repository.FindByEmail(input.Email)

	if ex != nil {
		return UserLoginFormatter{}, ex
	}

	if checkUser.ID == 0 {
		return UserLoginFormatter{}, errors.New("invalid")
	}

	ex = bcrypt.CompareHashAndPassword([]byte(checkUser.Password), []byte(input.Password))

	if ex != nil {
		return UserLoginFormatter{}, errors.New("user email / password invalid")
	}

	token, _ := s.authService.GenerateToken(checkUser.ID)

	formatter := UserLoginFormat(checkUser, token)

	return formatter, nil

}

func (s *service) GetUserByID(userID string) (UserFormatter, error) {
	user, err := s.repository.GetUserByID(userID)

	if err != nil {
		return UserFormatter{}, err
	}

	formatter := UserFormat(user)

	return formatter, nil
}
