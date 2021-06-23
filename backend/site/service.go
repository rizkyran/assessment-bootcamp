package site

import (
	"time"
)

type Service interface {
	AddSite(input SiteInput) (Site, error)
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

func (s *service) AddSite(input SiteInput) (Site, error) {

	var newUser = Site{
		Webite:    input.Webite,
		SitePass:  input.SitePass,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	site, ex := s.repository.AddSite(newUser)
	if ex != nil {
		return Site{}, ex
	}

	return site, nil
}
