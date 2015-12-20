package config;

import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

public class sessionInitializer extends AbstractHttpSessionApplicationInitializer {
	public sessionInitializer() {
		super(sessionConfig.class);
	}
}
