package com.admin.web.service;

import com.admin.web.dto.Menu;

public interface SettingsService {
	public int updateSetMenu(String setNewMenuNo, String loginId);
	public int insertMenu(Menu menu);
	public int deleteMenu(Menu menu);
}
