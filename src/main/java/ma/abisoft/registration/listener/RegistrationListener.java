package ma.abisoft.registration.listener;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import ma.abisoft.persistence.model.User;
import ma.abisoft.registration.OnRegistrationCompleteEvent;
import ma.abisoft.service.IUserService;
import ma.abisoft.service.MailClient;
import ma.abisoft.web.util.MailContent;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {
	 @Autowired
	    private IUserService service;

	    @Autowired
	    private MessageSource messages;
	    @Autowired
	    private MailClient mailClient;

	    @Autowired
	    private Environment env;

	    // API

	    @Override
	    public void onApplicationEvent(final OnRegistrationCompleteEvent event) {
	        this.confirmRegistration(event);
	    }

	    private void confirmRegistration(final OnRegistrationCompleteEvent event) {
	        final User user = event.getUser();
	        final String token = UUID.randomUUID().toString();
	        service.createVerificationTokenForUser(user, token);
	        constructEmailMessageAndSend(event,user,token);
	    }

	    //

	    @SuppressWarnings("unused")
		private final SimpleMailMessage constructEmailMessage(final OnRegistrationCompleteEvent event, final User user, final String token) {
	        final String recipientAddress = user.getEmail();
	        final String subject = "تأكيد التسجيل";
	        final String confirmationUrl = event.getAppUrl() + "/registrationConfirm.html?token=" + token;
	        final String message = messages.getMessage("message.regSucc", null, event.getLocale());
	        final SimpleMailMessage email = new SimpleMailMessage();
	        email.setTo(recipientAddress);
	        email.setSubject(subject);
	        email.setText(message + " \r\n" + confirmationUrl);
	        email.setFrom(env.getProperty("support.email"));
	        return email;
	    }
	    
	    void constructEmailMessageAndSend(final OnRegistrationCompleteEvent event, final User user, final String token) { 
	        final String subject = " تأكيد التسجيل";
	        final String confirmationUrl = event.getAppUrl() + "/registrationConfirm.html?token=" + token;
	        final String message = messages.getMessage("message.regSucc1", null, event.getLocale());
	        final String action = messages.getMessage("registration.confirm.action", null, event.getLocale());
	        final String greeting = messages.getMessage("user.greeting", null,event.getLocale()) + "  " +  user.getFirstName();
	        MailContent mailContent = new MailContent(null, subject,null,null);
			String[] bodyMessages = {greeting,message};
			mailContent.buildListOfBodyContent(bodyMessages);
			mailContent.defaultFootter();
			mailContent.defaultLogo();
			mailContent.setAction(action);
			mailContent.setUrl(confirmationUrl);
			mailClient.prepareAndSendCustom(user.getEmail(), mailContent);
	   }
}
