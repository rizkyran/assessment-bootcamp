package user

import "gorm.io/gorm"

type Repository interface {
}

type repository struct {
}

func UserRepo(db *gorm.DB) *repository {
	return &repository{db}
}
