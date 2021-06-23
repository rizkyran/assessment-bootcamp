package site

import (
	"fmt"
	"time"
)

type Service interface {
	AddSite(input SiteInput, userID int) (Site, error)
	GetIDSite(ID string) (Site, error)
	GetUserID(userID string) ([]Site, error)
	AlterSiteData(ID string, input SiteAlter) (Site, error)
	DeleteSiteData(ID string) (string, error)
}

type service struct {
	repository Repository
}

func NewSiteService(repository Repository) *service {
	return &service{repository}
}

func (s *service) GetAllSite() ([]Site, error) {
	sites, ex := s.repository.GetAllSite()

	if ex != nil {
		return sites, ex

	}

	return sites, nil
}

func (s *service) AddSite(input SiteInput, userid int) (Site, error) {

	var newUser = Site{
		Webite:    input.Webite,
		SitePass:  input.SitePass,
		UserID:    userid,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	site, ex := s.repository.AddSite(newUser)
	if ex != nil {
		return site, ex
	}

	return site, nil
}

func (s *service) GetIDSite(ID string) (Site, error) {
	site, ex := s.repository.FindByID(ID)

	if ex != nil {
		return Site{}, ex
	}

	return site, nil
}

func (s *service) GetUserID(userID string) ([]Site, error) {
	site, ex := s.repository.FindByUserID(userID)

	if ex != nil {
		return site, ex
	}

	return site, nil
}

func (s *service) AlterSiteData(ID string, input SiteAlter) (Site, error) {
	var newData = map[string]interface{}{}

	if input.Webite != "" || len(input.Webite) != 0 {
		newData["webite"] = input.Webite
	}

	if input.SitePass != "" || len(input.SitePass) != 0 {
		newData["site_pass"] = input.SitePass
	}
	newData["updated_at"] = time.Now()

	siteAlter, ex := s.repository.Alter(ID, newData)

	if ex != nil {
		return Site{}, ex
	}

	return siteAlter, nil
}

func (s *service) DeleteSiteData(ID string) (string, error) {
	msg, ex := s.repository.DeleteSite(ID)

	if ex != nil || msg == "error" {
		return msg, ex
	}

	msgS := fmt.Sprintf("Site ID %s is deleted!", ID)

	return msgS, nil
}
