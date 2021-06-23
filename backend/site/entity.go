package site

import "time"

type Site struct {
	ID                   int    `gorm:"primaryKey"`
	Webite               string `json:"webite"`
	SitePass             string `json:"site_pass"`
	UserID               int    `json:"user_id"`
	CreatedAt, UpdatedAt time.Time
}

type SiteInput struct {
	Webite   string `json:"webite"`
	SitePass string `json:"site_pass"`
	UserID   int    `json:"user_id"`
}