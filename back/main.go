package main

import (
	"fmt"
	"log"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	// "assessmentRandhika/migration"
)

type User struct {
	ID                                 int `gorm : "primaryKey"`
	FullName, Address, Email, Password string
	CreatedAt, UpdatedAt               time.Time
}

type UserInput struct {
	FullName string `json : "full_name"`
	Address  string `json : "address"`
	Email    string `json : "email"`
	Password string `json : "password"`
}

func UserRegis(c *gin.Context) {
	var userInput UserInput

	err := c.ShouldBindJSON(&userInput)
	fmt.Println("data", userInput)
	if err != nil {
		fmt.Println("ini error", err)
		c.JSON(400, "error")
		return
	}

	c.JSON(201, userInput)
}

func main() {

	dsn := "root@tcp(localhost)/databaseuser?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&User{})

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.POST("/register", UserRegis)

	r.Run()
}
