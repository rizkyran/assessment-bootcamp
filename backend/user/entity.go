package user

import (
	"assessmentRandhikaR/site"
	"time"
)

type User struct {
	ID                   int         `gorm:"primaryKey"`
	FName                string      `json:"f_name"`
	Address              string      `json:"address"`
	Email                string      `json:"email"`
	Password             string      `json:"password"`
	SitePassword         []site.Site `gorm:"foreignKey:UserID"`
	CreatedAt, UpdatedAt time.Time
}

type UserRegister struct {
	FName    string `json:"f_name" binding:"required"`
	Address  string `json:"address" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserLogin struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}
