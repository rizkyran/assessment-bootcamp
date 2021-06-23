package config

import (
	"assessmentRandhikaR/migration"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	ex     = godotenv.Load()
	dbUser = os.Getenv("DB_USER")
	dbPass = os.Getenv("DB_PASS")
	dbHost = os.Getenv("DB_HOST")
	dbName = os.Getenv("DB_NAME")
)

func Config() *gorm.DB {
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)
	db, ex := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if ex != nil {
		log.Fatal(ex)
	}

	ex = db.AutoMigrate(&migration.User{}, &migration.Site{})

	return db
}
