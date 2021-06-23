package main

import (
	"assessmentRandhikaR/config"
	"assessmentRandhikaR/handler"
	"assessmentRandhikaR/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB             *gorm.DB = config.Config()
	userRepository          = user.NewRepo(DB)
	userService             = user.NewUserService(userRepository)
	userHandler             = handler.NewUserHandler(userService)
)

func main() {
	r := gin.Default()

	r.POST("/user/register", userHandler.RegisterUser)
	r.POST("/user/login", userHandler.LoginUser)

	r.GET("/user/pass")
	r.GET("/user/pass/:pass_id")
	r.POST("/user/pass")
	r.PUT("/user/pass/:pass_id")
	r.DELETE("/user/pass/:pass_id")

	r.Run(":8888") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
