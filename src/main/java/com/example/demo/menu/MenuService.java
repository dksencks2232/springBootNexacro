package com.example.demo.menu;

import java.util.List;

import com.example.demo.service.userVo;

public interface MenuService {

	List<?> selectUserMenuList(userVo userVo);
	
}
