package site

import "gorm.io/gorm"

type Repository interface {
	AddSite(site Site) (Site, error)
	GetAllSite() ([]Site, error)
	FindByID(ID string) (Site, error)
	Alter(ID string, dataAlter map[string]interface{}) (Site, error)
	FindByUserID(userID string) ([]Site, error)
	DeleteSite(ID string) (string, error)
}

// Remove(ID string) (int, error)

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

func (r *repository) FindByID(ID string) (Site, error) {
	var site Site

	if ex := r.db.Where("id = ?", ID).Find(&site).Error; ex != nil {
		return site, ex
	}

	return site, nil
}

func (r *repository) FindByUserID(userID string) ([]Site, error) {
	var site []Site

	if ex := r.db.Where("user_id = ?", userID).Find(&site).Error; ex != nil {
		return site, ex
	}

	return site, nil
}

func (r *repository) Alter(ID string, dataAlter map[string]interface{}) (Site, error) {
	var site Site

	if ex := r.db.Model(&site).Where("id = ?", ID).Updates(dataAlter).Error; ex != nil {
		return site, ex
	}

	if ex := r.db.Where("id = ?", ID).Find(&site).Error; ex != nil {
		return site, ex
	}

	return site, nil
}

func (r *repository) DeleteSite(ID string) (string, error) {
	var site Site

	if err := r.db.Where("id = ?", ID).Delete(&site).Error; err != nil {
		return "error", err
	}

	return "success", nil
}
