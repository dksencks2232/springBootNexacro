package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebAppConfig implements WebMvcConfigurer {

  
  /**
    * View Resolver 경로 설정
    */
  @Override
  public void configureViewResolvers(ViewResolverRegistry registry) {
    registry.jsp("/WEB-INF/jsp/", ".jsp");
  }

  /**
   * 루트 "/" 접속시 index 페이지로 포워딩
   */
  @Override
  @Order(Ordered.HIGHEST_PRECEDENCE + 1)
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("forward:/index.html");
  }

  /**
   * Web Resource 경로 설정
   */
  @Override
  @Order(Ordered.HIGHEST_PRECEDENCE + 2)
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
	registry.addResourceHandler("/_theme_/default/**").addResourceLocations("classpath:/static/test/_theme_/default/");
	registry.addResourceHandler("/_theme_/BaseMdi/**").addResourceLocations("classpath:/static/test/_theme_/BaseMdi/");
	
	registry.addResourceHandler("/Frame/*.js*").addResourceLocations("classpath:/static/test/Frame/");
	registry.addResourceHandler("/Base/**").addResourceLocations("classpath:/static/test/Base/");
	
    registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/static/test/_resource_/");
    registry.addResourceHandler("/FrameBase/**").addResourceLocations("classpath:/static/test/FrameBase/");
    //registry.addResourceHandler("/nexacro14lib/**").addResourceLocations("classpath:/static/test/nexacro14lib/");
    registry.addResourceHandler("/nexacro14lib/**").addResourceLocations("classpath:/static/test/nexacro14lib/");
    registry.addResourceHandler("/*.json").addResourceLocations("classpath:/static/test/");
    registry.addResourceHandler("/*.html").addResourceLocations("classpath:/static/test/");
    registry.addResourceHandler("/img/*.png").addResourceLocations("classpath:/static/test/img/");
    
    
    registry.addResourceHandler("/css/*.js").addResourceLocations("classpath:/static/test/css/");
    registry.addResourceHandler("/test.xadl.js").addResourceLocations("classpath:/static/test/");
    //registry.addResourceHandler("/lib_base.xjs.js").addResourceLocations("classpath:/static/test/nexacro14lib/component/comLib/");
    registry.addResourceHandler("/nexacro14lib/component/comLib/*.xjs.js").addResourceLocations("classpath:/static/test/nexacro14lib/component/comLib/");
    
    
    
    
  } 

}
