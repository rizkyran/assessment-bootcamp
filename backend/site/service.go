package site

import (
	"time"
)

type Service interface {
	AddSite(input SiteInput, userid int) (Site, error)
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
