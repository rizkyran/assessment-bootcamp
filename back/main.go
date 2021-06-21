package main

import (
	"assessmentRandhika/config"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	// "assessmentRandhika/migration"
)

// type UserIn struct {
// 	ID                                 int `gorm : "primaryKey"`
// 	FullName, Address, Email, Password string
// 	// CreatedAt, UpdatedAt               time.Time
// }

type UserInput struct {
	Name     string `json : "name"`
	Address  string `json : "address"`
	Email    string `json : "email"`
	Password string `json : "password"`
	Status   int    `json:"status"`
}

var (
	db  *gorm.DB = config.Config()
	err error
)

func UserRegis(c *gin.Context) {
	var dataReq UserInput

	err = c.ShouldBindJSON(&dataReq)
	fmt.Println("data", dataReq)
	if err != nil {
		// fmt.Println("ini error", err)
		c.JSON(400, "error")
		return
	}

	var newUser = UserInput{
		Name:     dataReq.Name,
		Address:  dataReq.Address,
		Email:    dataReq.Email,
		Password: dataReq.Password,
		Status:   0,
		// CreatedAt: time.Now(),
		// UpdatedAt: time.Now(),
	}

	fmt.Println("inidatareq ", dataReq)
	fmt.Println("ini new user", newUser)
	usr := db.Begin()
	fmt.Println("after usr", usr)
	fmt.Println("before if")
	if err = db.Create(&dataReq).Error; err != nil {
		fmt.Println("ini error", err)
		c.JSON(400, err.Error())
		return
	}
	fmt.Println("after if")

	fmt.Println("asd")

	c.JSON(201, dataReq)
}

func main() {

	dsn := "root@tcp(localhost)/databaseuser?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&UserInput{})

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.POST("/register", UserRegis)

	r.Run()
}
