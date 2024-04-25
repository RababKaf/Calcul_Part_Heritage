package ma.abisoft.service;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import ma.abisoft.web.util.MailContent;


@Service
public class MailContentBuilder {

	 private TemplateEngine templateEngine;

	    @Autowired
	    public MailContentBuilder(TemplateEngine templateEngine) {
	        this.templateEngine = templateEngine;
	    }

	    public String build(String [] messages, String url) {
	        Context context = new Context();
	        Path p = Paths.get("header.jpg");
	        System.out.println("url name="+url);
	        context.setVariable("imageResourceName", p.getFileName().toString());
	       for (int i = 0; i < messages.length; i++) {
	    	   context.setVariable("message"+i, messages[i]);
		    }
	       context.setVariable("url", url);
	       // System.out.println("message MailContentBuilder: "+message);
	        return templateEngine.process("Admin/email_templates/action", context);
	    }
	    
	    public String buildCustom(MailContent mailContent) {
	        Context context = new Context();
	        context.setVariable("mailContent", mailContent); 
	        return templateEngine.process("Admin/email_templates/action", context);
	    }
	    
	    public String build(String message) {
	        Context context = new Context();
	        context.setVariable("message", message);
	        return templateEngine.process("Admin/email_templates/action", context);
	    }


}