package user

import "gorm.io/gorm"

type Repository interface {
	Register(user User) (User, error)
	FindByEmail(email string) (User, error)
	// GetAllUser() ([]User, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Register(user User) (User, error) {
	if ex := r.db.Create(&user).Error; ex != nil {
		return user, ex
	}

	return user, nil
}

// func (r *repository) GetAllUser() ([]User, error) {
// 	var users []User

// 	if err := r.db.Find(&users).Error; err != nil {
// 		return users, err
// 	}

// 	return users, nil
// }

func (r *repository) FindByEmail(email string) (User, error) {
	var user User

	if ex := r.db.Where("email=?", email).Find(&user).Error; ex != nil {
		return user, ex
	}

	return user, nil
}
