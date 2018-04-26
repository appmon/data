package com.admin.web.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.web.dto.Menu;
import com.admin.web.mapper.SettingsMapper;
import com.admin.web.service.SettingsService;

@Service
public class SettingsServiceImpl implements SettingsService{
	@Autowired private SettingsMapper settingsMapper;
	
	public int updateSetMenu(String setNewMenuNo, String loginId){
		return settingsMapper.updateSetMenu(setNewMenuNo, loginId);
	};
	
	public int insertMenu(Menu menu){
		return settingsMapper.insertMenu(menu);
	}
	
	public int deleteMenu(Menu menu){
		return settingsMapper.deleteMenu(menu);
	}
}
