package ma.abisoft.web.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import ma.abisoft.persistence.dao.heritage.RegionRepository;
import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.Privilege;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.VerificationToken;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.registration.OnRegistrationCompleteEvent;
import ma.abisoft.security.ISecurityUserService;
import ma.abisoft.service.IUserService;
import ma.abisoft.service.MailClient;
import ma.abisoft.service.heritage.Inter;
import ma.abisoft.web.dto.PasswordDto;
import ma.abisoft.web.dto.UserDto;
import ma.abisoft.web.dto.heritage.OfficeDto;
import ma.abisoft.web.dto.heritage.VilleDto;
import ma.abisoft.web.error.InvalidOldPasswordException;
import ma.abisoft.web.error.UserAlreadyExistException;
import ma.abisoft.web.util.GenericResponse;
import ma.abisoft.web.util.MailContent;
import net.coobird.thumbnailator.Thumbnails;

@Controller
public class RegistrationController {
	 private final Logger LOGGER = LoggerFactory.getLogger(getClass());

	    @Autowired
	    private IUserService userService;

	    @Autowired
	    private ISecurityUserService securityUserService;
	    
	    @Autowired
	    private MailClient mailClient;

	    @Autowired
	    private MessageSource messages;
	    
	    @Autowired
	    private ApplicationEventPublisher eventPublisher;

	    @Autowired
	    private Environment env;

	    @Autowired
	    private AuthenticationManager authenticationManager;
	    private Inter s;
	   @Autowired
	   private VilleRepository vr;
	   
	    public RegistrationController(Inter os) {
	        super();
	    	this.s = os;
	    }
	    
	 

	    // Registration

	    
	    
	    @RequestMapping(value = "/user/registration", method = RequestMethod.POST)
	    @ResponseBody
	    public GenericResponse registerUserAccount(@Valid final UserDto accountDto,@Valid final OfficeDto o,@RequestParam("city") Long cityId,final HttpServletRequest request){
	        LOGGER.debug("Registering user account with information: {}", accountDto);

	        try {
        	Office office = new Office();
//	            office.setLabel(officeName);
//	            office.setAdresse(officeAdress);
        	//System.err.println("hhhhhhhhhhhhhhhhhhhhhhhhhhh");
        	//System.err.println(v.getId());
	        	Ville ville=vr.getById(cityId);
	        
	        	
	        	
//	        	
//	        	
//	        	String fileName = StringUtils.cleanPath(o.getImage().getOriginalFilename());
//	        	 // Provide the path to your default image file
//	        		
//	        		
//	        			if(fileName.isEmpty())
//	        				{System.err.println("not hjbzdjczhebjfhbjezbhvhjerbvjh a valid file");
//
//
//	        				   try {
//	        				        String defaultImagePath = "blazer1.jpg";
//	        				        String photoUrl = "blazer1.jpg"; // Replace with your actual photo URL
//	        				        
//	        				        File photoFile = ResourceUtils.getFile("classpath:" + photoUrl);
//	        				        
//	        				        // Transfer the photo file content to the MultipartFile object
//	        				        o.getImage().transferTo(photoFile);
//	        				        
//	        				    } catch (IOException e) {
//	        				        e.printStackTrace();
//	        				    }
//	        			  
//	        				
//	        				
//	        				
//	        				}
//	        		
//	        			try {
//	        				office.setImage(resizeImageForUse(Base64.getEncoder().encodeToString(o.getImage().getBytes()),400,400));
//	        			} catch (IOException e) {
//	        				e.printStackTrace();
//	        			}
	        	office.setFax(o.getFax());
	        office.setAdresse(o.getAdresse());
        office.setOfficeEmail(o.getOfficeEmail());
        office.setFix(o.getFix());
        office.setLabel(o.getLabel());
        office.setVille(ville);
//	            office.setFix(fixNumber);
        
	        
				final User registered = userService.registerNewUserAccount(accountDto,office);
			
				eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registered, request.getLocale(), getAppUrl(request)));
				return new GenericResponse("success");
			} catch (UserAlreadyExistException e) {
				
			   return new GenericResponse("fail",e.getMessage());
			 
			}
	    }
	    
	    
	    public String resizeImageForUse(String src,int width, int height) {
			BufferedImage image = base64ToBufferedImage(src);
			try {
				image = resizeImage(image, width,height);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				return bufferedImageTobase64(image);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return null;
		}
	    private  BufferedImage resizeImage(BufferedImage image , int width , int height) throws IOException {
			ByteArrayOutputStream outputstream = new ByteArrayOutputStream();
			try {
				Thumbnails.of(image).size(width, height).outputFormat("JPEG").outputQuality(1).toOutputStream(outputstream);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			byte[] data = outputstream.toByteArray();
			ByteArrayInputStream inputStream = new ByteArrayInputStream(data);
			return ImageIO.read(inputStream);
		}
		private BufferedImage base64ToBufferedImage(String base64Img) {
			BufferedImage image = null;
			byte[] decodedBytes = Base64.getDecoder().decode(base64Img);
			
			try {
				image = ImageIO.read(new ByteArrayInputStream(decodedBytes));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return image;
		}
		
		private String bufferedImageTobase64(BufferedImage image ) throws UnsupportedEncodingException {
			final ByteArrayOutputStream out = new ByteArrayOutputStream();
			try {
				ImageIO.write(image, "JPEG", Base64.getEncoder().wrap(out));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return out.toString(StandardCharsets.ISO_8859_1.name());
		}
		        

	    @RequestMapping(value = "/registrationConfirm", method = RequestMethod.GET)
	    public String confirmRegistration(final HttpServletRequest request, final Model model, @RequestParam("token") final String token,RedirectAttributes ra) throws UnsupportedEncodingException {
	        Locale locale = request.getLocale();
	        final String result = userService.validateVerificationToken(token);
	        if (result.equals("valid")) {
	        	
	            final User user = userService.getUser(token);
	       
	            
	            final HttpSession session = request.getSession(false);
	            if (session != null) {
	                session.setMaxInactiveInterval(30 * 60);
	                session.setAttribute("user1", user);
	            }
	            authWithoutPassword(user);
	            System.out.println("user="+user.toString());
	            return "redirect:/Client/index.html?user="+user.getEmail();
	        }

	        model.addAttribute("message", messages.getMessage("auth.message." + result, null, locale));
	        model.addAttribute("expired", "expired".equals(result));
	        model.addAttribute("token", token);
	        return "redirect:/badUser.html?lang=" + locale.getLanguage();
	    }

	    // user activation - verification

	    @RequestMapping(value = "/user/resendRegistrationToken", method = RequestMethod.GET)
	    @ResponseBody
	    public GenericResponse resendRegistrationToken(final HttpServletRequest request, @RequestParam("token") final String existingToken) {
	        final VerificationToken newToken = userService.generateNewVerificationToken(existingToken);
	        final User user = userService.getUser(newToken.getToken());
	        sendResendVerificationTokenEmail(getAppUrl(request), request.getLocale(), newToken, user);
	        return new GenericResponse(messages.getMessage("message.resendToken", null, request.getLocale()));
	    }

	    // Reset password
	    @RequestMapping(value = "/user/resetPassword", method = RequestMethod.POST)
	    @ResponseBody
	    public GenericResponse resetPassword(final HttpServletRequest request, @RequestParam("email") final String userEmail, final Locale locale) {
	    	final User user = userService.findUserByEmail(userEmail);
	             if (user != null) {
				
	        	final String token = UUID.randomUUID().toString();
	            userService.createPasswordResetTokenForUser(user, token);
	            
	            sendResetTokenEmail(getAppUrl(request), request.getLocale(), token, user);
	        }
	        return new GenericResponse(messages.getMessage("message.resetPasswordEmail", null, request.getLocale()));
	    }

	    @RequestMapping(value = "/user/changePassword", method = RequestMethod.GET)
	    public String showChangePasswordPage(final Locale locale, final Model model, @RequestParam("id") final long id, @RequestParam("token") final String token) {
	        final String result = securityUserService.validatePasswordResetToken(id, token);
	        if (result != null) {
	            model.addAttribute("message", messages.getMessage("auth.message." + result, null, locale));
	            return "redirect:/login?lang=" + locale.getLanguage();
	        }
	        return "redirect:/updatePassword.html?lang=" + locale.getLanguage();
	    }

	    @RequestMapping(value = "/user/savePassword", method = RequestMethod.POST)
	    @ResponseBody
	    public GenericResponse savePassword(final Locale locale, @Valid PasswordDto passwordDto) {
	        final User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	        userService.changeUserPassword(user, passwordDto.getNewPassword());
	        return new GenericResponse(messages.getMessage("message.resetPasswordSuc", null, locale));
	    }

	    // change user password
	    @RequestMapping(value = "/user/updatePassword", method = RequestMethod.POST)
	    @ResponseBody
	    public GenericResponse changeUserPassword(final Locale locale, @Valid PasswordDto passwordDto) {
	        final User user = userService.findUserByEmail(((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail());
	        if (!userService.checkIfValidOldPassword(user, passwordDto.getOldPassword())) {
	            throw new InvalidOldPasswordException();
	        }
	        userService.changeUserPassword(user, passwordDto.getNewPassword());
	        return new GenericResponse(messages.getMessage("message.updatePasswordSuc", null, locale));
	    }

	    @RequestMapping(value = "/user/update/2fa", method = RequestMethod.POST)
	    @ResponseBody
	    public GenericResponse modifyUser2FA(@RequestParam("use2FA") final boolean use2FA) throws UnsupportedEncodingException {
	        final User user = userService.updateUser2FA(use2FA);
	        if (use2FA) {
	            return new GenericResponse(userService.generateQRUrl(user));
	        }
	        return null;
	    }
	 // send email with template
	    /*********************************************************************************/
	    private void sendResetTokenEmail(final String contextPath, final Locale locale, final String token, final User user) {
	        final String url = contextPath + "/user/changePassword?id=" + user.getId() + "&token=" + token;
	        final String message = messages.getMessage("message.resetPassword", null, locale);
	        final String subject = messages.getMessage("password.change.subject", null, locale);
	        final String action = messages.getMessage("password.resset.action", null, locale);
	        final String greeting =  messages.getMessage("user.greeting", null,locale) + " " + user.getFirstName();
	        sendEmail(user.getEmail(), message ,subject, action, url,greeting);
	    }
	    private void sendResendVerificationTokenEmail(final String contextPath, final Locale locale, final VerificationToken newToken, final User user) {
	        final String confirmationUrl = contextPath + "/registrationConfirm.html?token=" + newToken.getToken();
	        final String message = messages.getMessage("message.resendToken", null, locale);
	        final String subject = messages.getMessage("user.registration.confirm.subject", null, locale);
	        final String action = messages.getMessage("registration.confirm.action", null, locale);
	        final String greeting =  messages.getMessage("user.greeting", null,locale) + " " + user.getFirstName();
	     
	        sendEmail(user.getEmail(),message,subject, action,confirmationUrl,greeting);
	    }
	    /********************************************************************************/

	    // ============== NON-API ============

	    @SuppressWarnings("unused")
		private SimpleMailMessage constructResendVerificationTokenEmail(final String contextPath, final Locale locale, final VerificationToken newToken, final User user) {
	        final String confirmationUrl = contextPath + "/registrationConfirm.html?token=" + newToken.getToken();
	        final String message = messages.getMessage("message.resendToken", null, locale);
	        return constructEmail("Resend Registration Token", message + " \r\n" + confirmationUrl, user);
	    }

	    @SuppressWarnings("unused")
		private SimpleMailMessage constructResetTokenEmail(final String contextPath, final Locale locale, final String token, final User user) {
	        final String url = contextPath + "/user/changePassword?id=" + user.getId() + "&token=" + token;
	        //final String message = messages.getMessage("message.resetPassword", null, locale);
	        final String message1 = messages.getMessage("message.resetPassword.objet", null, locale);
	        //final String message2 = messages.getMessage("message.registration.tete", null, locale);
	       // return constructEmail(message1, message2+" "+user.getFirstName()+","+ " \r\n" +message + " \r\n" + url, user);
	        return constructEmail(message1, url, user);
	    }

	    private SimpleMailMessage constructEmail(String subject, String body, User user) {
	        final SimpleMailMessage email = new SimpleMailMessage();
	        email.setSubject( subject);
	        email.setText(body);
	        email.setTo(user.getEmail());
	        email.setFrom(env.getProperty("support.email"));
	        return email;
	    }

	    private String getAppUrl(HttpServletRequest request) {
	        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
	    }

	    public void authWithHttpServletRequest(HttpServletRequest request, String username, String password) {
	        try {
	            request.login(username, password);
	        } catch (ServletException e) {
	            LOGGER.error("Error while login ", e);
	        }
	    }

	    public void authWithAuthManager(HttpServletRequest request, String username, String password) {
	        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);
	        authToken.setDetails(new WebAuthenticationDetails(request));
	        Authentication authentication = authenticationManager.authenticate(authToken);
	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        
	    }

	    public void authWithoutPassword(User user) {
	        List<Privilege> privileges = user.getRoles().stream().map(role -> role.getPrivileges()).flatMap(list -> list.stream()).distinct().collect(Collectors.toList());
	        List<GrantedAuthority> authorities = privileges.stream().map(p -> new SimpleGrantedAuthority(p.getName())).collect(Collectors.toList());

	        Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, authorities);

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	    }
	    /*****************************************************************************/
	  //send email with a template
	    private void sendEmail(String email, String text, String sujet,String action,String url,String greeting) {

			MailContent mailContent = new MailContent(null, sujet,null,null);
			String[] bodyMessages = {greeting,text};
			mailContent.buildListOfBodyContent(bodyMessages);
			mailContent.defaultFootter();
			mailContent.defaultLogo();
			mailContent.setAction(action);
			mailContent.setUrl(url);
			mailClient.prepareAndSendCustom(email, mailContent);
		}

	
	    
	    
		 
		
}
