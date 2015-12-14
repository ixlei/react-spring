package webSocket;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import model.Investor;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import com.mysql.jdbc.Constants;

@EnableRedisHttpSession
public class webSocketHandshakeInterceptor implements HandshakeInterceptor {

	public boolean beforeHandshake(ServerHttpRequest request,
			ServerHttpResponse response, WebSocketHandler wsHandler,
			Map<String, Object> map) throws Exception {

	/*	if (request instanceof ServletServerHttpRequest) {
			ServletServerHttpRequest servletReq = (ServletServerHttpRequest) request;
			map.put("citiuser", ((ServletServerHttpRequest) request)
					.getServletRequest().getParameter("session"));
		}*/
		return true;
	}

	public void afterHandshake(ServerHttpRequest req, ServerHttpResponse res,
			WebSocketHandler wsHandler, Exception arg3) {

	}

}
