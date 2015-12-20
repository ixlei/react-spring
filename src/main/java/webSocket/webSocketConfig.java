package webSocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.session.ExpiringSession;
import org.springframework.session.web.socket.config.annotation.AbstractSessionWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

/*@Configuration
 @EnableWebSocket
 public class webSocketConfig extends WebMvcConfigurerAdapter implements WebSocketConfigurer {

 @Override
 public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
 registry.addHandler(getWebSocketServer(), "/webSocketServer")
 .addInterceptors(new webSocketHandshakeInterceptor());

 }

 @Bean
 public WebSocketHandler getWebSocketServer() {
 return new webSocketServer();
 }

 }*/

@Configuration
@EnableScheduling
@EnableWebSocketMessageBroker
public class webSocketConfig extends
		AbstractSessionWebSocketMessageBrokerConfigurer<ExpiringSession> {

	@Override
	protected void configureStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/webSocketServer")
			.withSockJS()
				.setInterceptors(new webSocketHandshakeInterceptor());
	}

	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableSimpleBroker("/queue/", "/topic/");
		registry.setApplicationDestinationPrefixes("/app");
	}

}
