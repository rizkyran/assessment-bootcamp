package handler

import (
	"assessmentRandhikaR/site"

	"github.com/gin-gonic/gin"
)

type siteHandler struct {
	service site.Service
}

func NewSiteHandler(service site.Service) *siteHandler {
	return &siteHandler{service}
}

// func (h *userHandler) GetAllUser(c *gin.Context) {
// 	users, err := h.service.GetAllUser()

// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, users)
// }

// func (h *userHandler) GetUserByID(c *gin.Context) {
// 	paramID := c.Params.ByName("user_id")

// 	user, err := h.service.GetUserByID(paramID)

// 	if err != nil {
// 		c.JSON(500, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, user)
// }

func (h *siteHandler) AddSite(c *gin.Context) {
	var input site.SiteInput
	var userid = c.MustGet("currentUser").(int)

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(400, gin.H{"errors": err.Error()})
		return
	}

	user, err := h.service.AddSite(input, userid)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(201, user)
}
