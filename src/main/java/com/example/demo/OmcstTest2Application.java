package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@MapperScan
/*@SpringBootApplication*/
@SpringBootApplication(exclude={SecurityAutoConfiguration.class})// spring boot security disable
public class OmcstTest2Application {

	public static void main(String[] args) {
		SpringApplication.run(OmcstTest2Application.class, args);
	}

}
