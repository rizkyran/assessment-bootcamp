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

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, PATCH, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	r := gin.Default()

	r.Use(CORSMiddleware())

	r.POST("/user/register", userHandler.RegisterUser) // user register
	r.POST("/user/login", userHandler.LoginUser)       // user login

	r.GET("/user/site", middleware, siteHandler.GetSiteByID)
	r.POST("/user/site/add", middleware, siteHandler.AddSite) // add site
	r.PUT("/user/site/:id", middleware, siteHandler.AlterSiteData)
	r.DELETE("/user/site/:id", middleware, siteHandler.DeleteSiteData)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
