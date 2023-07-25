package com.example.demo.service;

import org.springframework.stereotype.Service;


@Service
public interface loginService {

	public loginVo getLoginCheck(loginVo loginVo); 
}
