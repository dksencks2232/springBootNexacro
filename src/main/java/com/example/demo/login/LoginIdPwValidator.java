package com.example.demo.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.loginMapper;
import com.example.demo.service.loginVo;

/*작업해야함 */
@Service
public class LoginIdPwValidator implements UserDetailsService  {

	@Autowired
	private loginMapper loginMapper;

	// DB의 pw(암호화된)와 유저가 입력한 pw를 암호화하여 자동으로 비교
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

	@Override
	public UserDetails loadUserByUsername(String insertedId) throws UsernameNotFoundException {
		// 사용자가 입력한 id가 인자로 들어옴 -> 유저id로 DTO꺼내오기
//		loginVo loginVo = loginMapper.getMemberById(insertedId);
		
		loginVo loginVo = new loginVo();
		loginVo.setUSER_ID(insertedId);
		loginMapper.getLoginCheck(loginVo);
		
	        if (loginVo == null) {
	            return null; // ID 혹은 PW가 잘못되었습니다.	            
	        }
	        
//	        String passwd = loginVo.getMem_passwd();
//	        String roles = loginVo.getMem_role();
	        String passwd = "";
	        String roles = "";
	        return User.builder()
	                .username(insertedId)
	                .password(passwd)
	                .roles(roles)
	                .build();
	}

}
