package main

import (
	"assessmentRandhika/config"

	"github.com/gin-gonic/gin"
	"github.com/go-delve/delve/pkg/config"
	"gorm.io/gorm"
	// "assessmentRandhika/migration"
)

// type User struct {
// 	ID                                 int `gorm : "primaryKey"`
// 	FullName, Address, Email, Password string
// 	// CreatedAt, UpdatedAt               time.Time
// }

// type UserInput struct {
// 	FullName string `json : "full_name"`
// 	Address  string `json : "address"`
// 	Email    string `json : "email"`
// 	Password string `json : "password"`
// }

var (
	db  *gorm.DB = config.Config()
	err error
)

// func UserRegis(c *gin.Context) {
// 	var dataReq UserInput

// 	err = c.ShouldBindJSON(&dataReq)
// 	fmt.Println("data", dataReq)
// 	if err != nil {
// 		// fmt.Println("ini error", err)
// 		c.JSON(400, "error")
// 		return
// 	}

// 	// var newUser = User{
// 	// 	FullName: dataReq.FullName,
// 	// 	Address:  dataReq.Address,
// 	// 	Email:    dataReq.Email,
// 	// 	Password: dataReq.Password,
// 	// 	// CreatedAt: time.Now(),
// 	// 	// UpdatedAt: time.Now(),
// 	// }

// 	fmt.Println("inidatareq ", dataReq)
// 	// fmt.Println("ini new user", newUser)
// 	// usr := db.Begin()
// 	//fmt.Println("after usr", usr)
// 	// fmt.Println("before if")
// 	// if err = db.Create(&dataReq).Error; err != nil {
// 	// 	fmt.Println("ini error", err)
// 	// 	c.JSON(400, err.Error())
// 	// 	return
// 	// }
// 	// fmt.Println("after if")

// 	// fmt.Println("asd")

// 	c.JSON(201, dataReq)
// }

func main() {

	// dsn := "root@tcp(localhost)/databaseuser?charset=utf8mb4&parseTime=True&loc=Local"
	// db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// db.AutoMigrate(&User{})

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.POST("/register")

	r.Run()
}
