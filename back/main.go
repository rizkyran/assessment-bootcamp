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
	Name     string `json : "full_name"`
	Address  string `json : "address"`
	Email    string `json : "email"`
	Password string `json : "password"`
}

var (
	db  *gorm.DB
	err error
)

func UserRegis(c *gin.Context) {
	dataReq := UserInput{}

	err = c.ShouldBindJSON(&dataReq)
	fmt.Println("data", dataReq)
	if err != nil {
		fmt.Println("ini error", err)
		c.JSON(400, "error")
		return
	}

	var newUser = User{
		FullName:  dataReq.Name,
		Address:   dataReq.Address,
		Email:     dataReq.Email,
		Password:  dataReq.Password,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	fmt.Println(newUser)

	// usr := db.Begin()
	err = db.Create(&newUser).Error
	if err != nil {
		fmt.Println("ini error", err)
		c.JSON(400, "error")
		return
	}

	fmt.Println("asd")

	c.JSON(201, dataReq)
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
