package com.admin.web.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.admin.web.dto.Menu;

@Mapper
public interface SettingsMapper {
	public int updateSetMenu(@Param("setNewMenuNo") String setNewMenuNo,
                             @Param("loginId") String loginId);
	public int insertMenu(@Param("menu") Menu menu);
	public int deleteMenu(@Param("menu") Menu menu);
	
}
