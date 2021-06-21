package user

type Service interface {
}

type service struct {
	repository Repository
}

func UserService(repository Repository) *service {
	return &service{}
}
