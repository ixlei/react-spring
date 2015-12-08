package webSocket;

import java.io.IOException;
import java.util.ArrayList;

import model.Investor;
import net.sf.json.JSONObject;

import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;


@EnableRedisHttpSession
public class webSocketServer implements WebSocketHandler {

	private static final ArrayList<WebSocketSession> users = new ArrayList<WebSocketSession>();

	public webSocketServer() {

	}

	public void afterConnectionClosed(WebSocketSession session, CloseStatus arg1)
			throws Exception {
		users.remove(session);
	}

	public void afterConnectionEstablished(WebSocketSession session)
			throws Exception {
		System.out.println("connect to websocket success..."
				+ session.getAttributes().get("citiuser"));
		users.add(session);
	}

	public void handleMessage(WebSocketSession session,
			WebSocketMessage<?> message) throws Exception {
		JSONObject jb = JSONObject.fromObject(message.getPayload().toString());
		String id = jb.getString("uid");
		String data = jb.getString("data");
		String sessionId;
		int i = 0;
		for (i = 0; i < users.size(); i++) {
			
			sessionId = (String) users.get(i).getAttributes().get("citiuser");
			if(sessionId.equals(id)) {
				System.out.println("success");
				break;
			}
		}
		
		
		if(i != users.size()) {
			users.get(i).sendMessage(new TextMessage(data));
		}
		
		
	}

	public void handleTransportError(WebSocketSession arg0, Throwable arg1)
			throws Exception {

	}

	public boolean supportsPartialMessages() {
		return false;
	}

	public boolean sendMessageToUSer(String userName, TextMessage textMessage)
			throws IOException {

		int i = 0;
		Investor investorUser = null;
		for (i = 0; i < users.size(); i++) {
			investorUser = (Investor) users.get(i).getAttributes()
					.get("citiuser");
			if (investorUser.getEmail().equals(userName)) {
				break;
			}
		}

		if (i == users.size()) {
			return false;
		}

		if (users.get(i).isOpen()) {
			users.get(i).sendMessage(textMessage);
			return true;
		}

		return false;

	}

	public void sendMessageToAll(TextMessage textMessage) throws IOException {
		int i = 0;

		for (i = 0; i < users.size(); i++) {
			if (users.get(i).isOpen()) {
				users.get(i).sendMessage(textMessage);
			}
		}
	}

}
