package com.example.demo.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.menuMapper;
import com.example.demo.service.userVo;

@Service
public class MenuServiceImpl implements MenuService{

	@Autowired
	private menuMapper menuMapper;
	
	@Override
	public List<?> selectUserMenuList(userVo userVo) {
		// TODO Auto-generated method stub
		List<?> data = new ArrayList();
		data = menuMapper.selectUserMenuList(userVo);
		return data;
	}

}
