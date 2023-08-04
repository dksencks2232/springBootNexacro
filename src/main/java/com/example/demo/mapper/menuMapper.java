package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.service.userVo;

@Mapper
@Repository
public interface menuMapper {

	List<?> selectUserMenuList(userVo userVo);

}
