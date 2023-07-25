package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.service.loginVo;

@Mapper
@Repository
public interface loginMapper{
	
//	@Autowired
//	private SqlSessionTemplate sqlSessionTemplate;
	
	public loginVo getLoginCheck(loginVo loginVo) ;
}


////@Repository
//public class loginMapper {
//	
////	@Autowired
////	private SqlSessionTemplate sqlSessionTemplate;
////
////	public loginVo getLoginCheck(loginVo loginvo) {
////		// userMapper 라는 부분과 5단계에 있는 mapper.xml 파일의 namespace를 동일하게 맞춰준다
////        //.getUserInfo 와 5단계에 있는 <select id= 부분를 동일하게 맞춰준다.
////        return sqlSessionTemplate.selectOne("loginMapper.getLoginCheck",loginvo);
////        
////	}
//}
