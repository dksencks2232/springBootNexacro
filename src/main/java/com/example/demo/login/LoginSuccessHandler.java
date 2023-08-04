package com.example.demo.login;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

/*작업해야함 */
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
	@Override
	public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse res,
			Authentication auth) throws IOException, ServletException {
		//로그인 성공시 기본 페이지 설정
		String url = "/index";
		
		//인증된 사용자의 user객체 추출
		User user = (User) auth.getPrincipal();
		
		//user객체에서 role 목록 추출
		Collection<GrantedAuthority> authlist = user.getAuthorities();
		Iterator<GrantedAuthority> authlist_it= authlist.iterator();
		
		while(authlist_it.hasNext()) {
			GrantedAuthority authority= authlist_it.next();
			//설정되어 있는 권한 중 ROLE_ADMIN이 있다면
			if(authority.getAuthority().equals("ROLE_ADMIN")) {
				url="/admin";
			}
		}
		
		res.sendRedirect(url);
		req.getSession().setAttribute("userDetail", user);
	}
}
