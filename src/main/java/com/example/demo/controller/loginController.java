package com.example.demo.controller;

import javax.annotation.Resource;

import org.apache.poi.util.SystemOutLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.mapper.loginMapper;
import com.example.demo.service.loginServiceImple;
import com.example.demo.service.loginVo;


@Controller
public class loginController {
	
	@Autowired
	com.example.demo.service.loginService loginService;

    @GetMapping("/login.do")
    public String login() {
    	
    	loginVo loginVo = new loginVo();
    	loginVo.setCheck(1);
    	System.out.print(loginService.getLoginCheck(loginVo) );
        return "test";
    }
}
