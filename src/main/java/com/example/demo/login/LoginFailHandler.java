package com.example.demo.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

/*작업해야함 */
public class LoginFailHandler extends SimpleUrlAuthenticationFailureHandler   {

	@Override
    public void onAuthenticationFailure(HttpServletRequest req, HttpServletResponse res, AuthenticationException e) throws IOException, ServletException {
		String url = "/login.do?error";
		res.sendRedirect(url);
    }
}
