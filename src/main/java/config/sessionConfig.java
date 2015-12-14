package config;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
public class sessionConfig {
	
	ApplicationContext context = new ClassPathXmlApplicationContext("jedisConf.xml");
	@Bean
	public JedisConnectionFactory connectionFactory() {
		
		return (JedisConnectionFactory) context.getBean("jedisConnectionFactory");
	}
}
