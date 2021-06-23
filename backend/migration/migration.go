package migration

import "time"

type User struct {
	ID                   int `gorm: "primaryKey"`
	FName                string
	Address              string
	Email                string
	Password             string
	SitePassword         []Site `gorm "foreignKey:UserID"`
	CreatedAt, UpdatedAt time.Time
}

type Site struct {
	ID                   int `gorm:"primaryKey"`
	Webite, SitePass     string
	UserID               int
	CreatedAt, UpdatedAt time.Time
}
