package site

import "gorm.io/gorm"

type Repository interface {
	AddSite(site Site) (Site, error)
	// FindByEmail(email string) (User, error)
	GetAllSite() ([]Site, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepo(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) AddSite(site Site) (Site, error) {
	if ex := r.db.Create(&site).Error; ex != nil {
		return site, ex
	}

	return site, nil
}

func (r *repository) GetAllSite() ([]Site, error) {
	var sites []Site

	if err := r.db.Find(&sites).Error; err != nil {
		return sites, err
	}

	return sites, nil
}
