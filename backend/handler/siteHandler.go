package handler

import (
	"assessmentRandhikaR/site"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type siteHandler struct {
	service site.Service
}

func NewSiteHandler(service site.Service) *siteHandler {
	return &siteHandler{service}
}

// func (h *userHandler) GetAllUser(c *gin.Context) {
// 	users, ex := h.service.GetAllUser()

// 	if ex != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, users)
// }

func (h *siteHandler) GetSiteByID(c *gin.Context) {
	userID := c.MustGet("currentUser").(int)
	userIDtoStr := strconv.Itoa(userID)

	site, ex := h.service.GetUserID(userIDtoStr)

	if ex != nil {
		c.JSON(500, gin.H{"error": ex.Error()})
		return
	}

	c.JSON(http.StatusOK, site)
}

func (h *siteHandler) AddSite(c *gin.Context) {
	var input site.SiteInput

	if ex := c.ShouldBindJSON(&input); ex != nil {
		c.JSON(400, gin.H{"errors": ex.Error()})
		return
	}

	var userid = c.MustGet("currentUser").(int)

	user, ex := h.service.AddSite(input, userid)

	if ex != nil {
		c.JSON(500, gin.H{"error": ex.Error()})
		return
	}

	c.JSON(201, user)
}

func (h *siteHandler) AlterSiteData(c *gin.Context) {
	siteID := c.Params.ByName("id")

	var input site.SiteAlter

	if ex := c.ShouldBindJSON(&input); ex != nil {
		c.JSON(400, gin.H{"errors": ex.Error()})
		return
	}

	site, ex := h.service.AlterSiteData(siteID, input)

	if ex != nil {
		c.JSON(500, gin.H{"error": ex.Error()})
		return
	}

	c.JSON(200, site)

}

func (h *siteHandler) DeleteSiteData(c *gin.Context) {
	siteID := c.Params.ByName("id")

	msg, ex := h.service.DeleteSiteData(siteID)

	if ex != nil {
		c.JSON(500, gin.H{"error": ex.Error()})
		return
	}

	c.JSON(200, msg)
}
