package migration

import "time"

type User struct {
	ID                                 int `gorm : "primaryKey"`
	FullName, Address, Email, Password string
	CreatedAt, UpdatedAt               time.Time
}
