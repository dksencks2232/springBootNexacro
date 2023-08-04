package com.example.demo.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.poi.util.SystemOutLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.util.EncodingUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.common.util.EncUtil;
import com.example.demo.mapper.loginMapper;
import com.example.demo.menu.MenuService;
import com.example.demo.service.loginServiceImple;
import com.example.demo.service.loginVo;
import com.example.demo.service.userVo;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/*작업해야함 */
@Controller
public class loginController {
	
	
	@Autowired
	com.example.demo.service.loginService loginService;
	@Autowired
	MenuService menuService;

    @RequestMapping("/login.do")
    public NexacroResult login(@ParamDataSet(name= "dsLogin", required = false ) loginVo ds_login, HttpServletRequest request) throws Exception{
    	
//    	loginVo loginVo = new loginVo();
//    	loginVo.setCheck(1);
//    	System.out.print(loginService.getLoginCheck(loginVo) );
//        return "test";
    	
    	NexacroResult result = new NexacroResult();
    	result.setErrorCode(-1);
    	
    	userVo userVo = loginService.getUserInfo(ds_login);
    	
    	if( userVo != null ) {
    		System.out.println("서버에서 가져온 pw : " + userVo.getPASSWORD() );
    		System.out.println("화면에서 가져온 pw : " + ds_login.getPASSWORD() );
    		
    		if( userVo.getPASSWORD().equals( EncUtil.encryptSHA512( ds_login.getPASSWORD() ))){
    			HttpSession session = request.getSession();
				
				System.out.println("@@@@@@@@@@@ session @@@@@@@ " + session);
				System.out.println("@@@@@@@@@@@ session user@@@@@@@ " + session.getAttribute("user"));
				
				if(session.getAttribute("user") != null) {
					System.out.println("@@@@@@@@@@@ session user2@@@@@@@ " + session.getAttribute("user"));
					session.removeAttribute("user");
    		}
				
				session.setAttribute("user", userVo);
				System.out.println("@@@@@@@@@@@ user@@@@@@@ " + userVo);
				System.out.println("@@@@@@@@@@@ session user3@@@@@@@ " + session.getAttribute("user"));
				
				result.setErrorCode(0);
				
				result.addDataSet("gds_userInfo", userVo);
				
				// 사용자에 따른 메뉴 조회
				List<?> menuList = menuService.selectUserMenuList(userVo);
				// 메뉴 리턴
				result.addDataSet("gds_menu", menuList);
    		}
    	}
    	return result;
    }
}
