package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.example.demo.login.LoginFailHandler;
import com.example.demo.login.LoginIdPwValidator;
import com.example.demo.login.LoginSuccessHandler;

@SuppressWarnings("derecation")
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	LoginIdPwValidator loginIdPwValidator;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("Spring Security configure");
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/", "/index", "/login.do", "join").permitAll()// 이 URI는 누구든 접근가능
			.antMatchers("/admin/**").hasRole("Admin")//ADMIN role만 접근 가능
			.antMatchers("/member/**").hasRole("MEMBER")// ADMIN role만 접근 가능
			.anyRequest().authenticated()// 어떤 URI로 접근하던 인증이 필요함
		.and()
			.formLogin()
//			.loginPage("/login")
			.loginPage("/")
			.loginProcessingUrl("/loginProc")// 이 URI 호출시 스프링 시큐리티로 폼 정보를 제출 / form의 action
			.usernameParameter("id") // 폼 input name값: default - username
			.passwordParameter("passwd")// 폼 input name값: default - password
			.successHandler(loginSuccessHandler() )
			.failureHandler(loginFailHandler()) // 로그인 실패를 다룰 핸들러
			.permitAll()
            .and()
                .logout()
                .logoutSuccessUrl("/") // 로그아웃 성공시 이동할 URL
    			.logoutRequestMatcher(new AntPathRequestMatcher("/logoutProc")); // 이 URI 호출시 로그아웃

	}

	 //인증 예외 추가
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/resources/js/**", "/resources/css/**", "/resources/img/**", "/resources/icon/**").anyRequest();
    	//web.ignoring().antMatchers("/resources/static/**");
        web.httpFirewall(defaultHttpFirewall());
    }
    
    @Bean
    public HttpFirewall defaultHttpFirewall() {
        return new DefaultHttpFirewall();
    }

    
    //입력한 ID/PW가 DB와 일치하는지 확인
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(loginIdPwValidator);
    }
    
	 //로그인 성공 핸들러
    @Bean
    public LoginSuccessHandler loginSuccessHandler(){
        return new LoginSuccessHandler();
    }
    
    //로그인 실패 핸들러
    @Bean
    public LoginFailHandler loginFailHandler(){
        return new LoginFailHandler();
    }
	
    
	
}
