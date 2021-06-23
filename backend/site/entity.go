package site

import "time"

type Site struct {
	ID                   int `gorm:"primaryKey"`
	Webite, SitePass     string
	UserID               int
	CreatedAt, UpdatedAt time.Time
}
