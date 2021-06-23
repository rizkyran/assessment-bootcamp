package user

type UserFormatter struct {
	ID      int    `gorm:"primaryKey" json:"id"`
	FName   string `json:"f_name"`
	Email   string `json:"email"`
	Address string `json:"address"`
}

type UserLoginFormatter struct {
	ID      int    `gorm:"primaryKey" json:"id"`
	FName   string `json:"f_name"`
	Email   string `json:"email"`
	Address string `json:"address"`
	// Authorization string `json:"authorization"`
}

func UserFormat(user User) UserFormatter {
	return UserFormatter{
		ID:      user.ID,
		FName:   user.FName,
		Email:   user.Email,
		Address: user.Address,
	}
}

func UserLoginFormat(user User) UserLoginFormatter {
	return UserLoginFormatter{
		ID:      user.ID,
		FName:   user.FName,
		Email:   user.Email,
		Address: user.Address,
		// Authorization: token,
	}
}
