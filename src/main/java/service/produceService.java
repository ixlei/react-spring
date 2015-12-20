
package service;/*package service;
/*package service;
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa

import javax.jms.JMSException;
import javax.jms.Session;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;

public class produceService implements alertService {

	private JmsTemplate jmsTemplate;

	public void setJmsTemplate(JmsTemplate jmsTemplate) {
		this.jmsTemplate = jmsTemplate;
	}

	public JmsTemplate getJmsTemplate() {
		return this.jmsTemplate;
	}

	@Override
	public void sendTextMessage(String msg) {
		jmsTemplate.send(new MessageCreator() {

			@Override
			public javax.jms.Message createMessage(Session session)
					throws JMSException {

				return session.createTextMessage(msg);
			}

		});
	}


}
*/