package main

import (
	"assessmentRandhikaR/auth"
	"assessmentRandhikaR/config"
	"assessmentRandhikaR/handler"
	"assessmentRandhikaR/site"
	"assessmentRandhikaR/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB             *gorm.DB = config.Config()
	authService             = auth.NewAuthService()
	userRepository          = user.NewRepo(DB)
	userService             = user.NewUserService(userRepository, authService)
	userHandler             = handler.NewUserHandler(userService, authService)
	siteRepository          = site.NewRepo(DB)
	siteService             = site.NewSiteService(siteRepository)
	siteHandler             = handler.NewSiteHandler(siteService)
	middleware              = handler.Middleware(userService, authService)
)

func main() {
	r := gin.Default()

	r.POST("/user/register", userHandler.RegisterUser) // user register
	r.POST("/user/login", userHandler.LoginUser)       // user login

	r.GET("/user/site")
	r.GET("/user/site/:pass_id")
	r.POST("/user/site/add", middleware, siteHandler.AddSite) // add site
	r.PUT("/user/site/:pass_id")
	r.DELETE("/user/site/:pass_id")

	r.Run(":8888") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
