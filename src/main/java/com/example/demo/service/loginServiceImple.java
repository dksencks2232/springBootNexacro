package com.example.demo.service;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.loginMapper;

@Service
public class loginServiceImple implements loginService{

	
	@Autowired
	private loginMapper loginMapper;
	
	@Override
	public loginVo getLoginCheck(loginVo loginVo) {
//		return loginVo;
		return loginMapper.getLoginCheck(loginVo );
	}

	@Override
	public userVo getUserInfo(loginVo ds_login) {
		// TODO Auto-generated method stub
		return loginMapper.getUserInfo(ds_login);
	}

}
