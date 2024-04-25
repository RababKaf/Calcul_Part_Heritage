package ma.abisoft.web.controller;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.messageRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.inbox;
import ma.abisoft.persistence.model.heritage.message;
import ma.abisoft.persistence.dao.heritage.inboxRepository;
import ma.abisoft.service.UserService;

@Controller
public class AdminIndex {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository ur;
	
	@Autowired
	private messageRepository mr;
	
	@Autowired
	private inboxRepository ir;

	public AdminIndex(UserService userService) {
		super();
		this.userService = userService;
		
	}

	@GetMapping(value = { "/Admin/index.html","/Admin/index"})
	public String wxAutoLogin1(HttpServletRequest request, HttpServletResponse response,Authentication auth, Model model) throws Exception {
		
		User user = (User) auth.getPrincipal();
		if (user != null) {
			user = userService.findUserByEmail(user.getEmail());
			model.addAttribute("user", user);
		}
		model.addAttribute("usersActive",ur.userbyRole());
		model.addAttribute("usersInactive", userService.getAllUserByenabled(false));
		return "Admin/index";

	}
	
	
	
	@GetMapping(value = { "/Admin/index.html{lastName}"})
	public String findit(HttpServletRequest request, HttpServletResponse response,Authentication auth, Model model,@PathVariable String lastName) throws Exception {
		
		User user = (User) auth.getPrincipal();
		List<User> la = new ArrayList<User>();
		List<User> ld = new ArrayList<User>();
		if (user != null) {
			user = userService.findUserByEmail(user.getEmail());
			model.addAttribute("user", user);
		}
	


		
		for(int i=0;i<userService.findByLastrnameContaining(lastName).size();i++) {
		if(userService.findByLastrnameContaining(lastName).get(i).isEnabled()) 
			la.add(userService.findByLastrnameContaining(lastName).get(i));
		
	
	
		else 
			ld.add(userService.findByLastrnameContaining(lastName).get(i));
		}
		model.addAttribute("usersInactive",ld);
		model.addAttribute("usersActive", la);
		return "Admin/index";

	}
	
	
	 @GetMapping("/Admin/change-state/{id}") 
	 public String changeUserState(@PathVariable("id") Long id) {
	 userService.changeUserState(id); return "redirect:/Admin/index"; }
	 
	 
	 
	 
	 
	 @GetMapping("/Admin/messages")
	 public String msg(Model model) {
		 List<User> u=ur.userbyRole();
		 model.addAttribute("users", u);
			model.addAttribute("inboxes",ir.findAll());
		 return "Admin/messages";
	 }
	 
	 
	 
	@GetMapping("/mailbox") 
		 public String mail(HttpServletRequest request, Model model) {
				HttpSession session = request.getSession();
				User user =(User)session.getAttribute("user1");
				if(user!=null) {
					model.addAttribute("user", user);
					model.addAttribute("messages",mr.findByUser(user));
				
				
				}
				
		
	
		
		return "ClientProfessionnel/messages";
	}
	 
	
	@GetMapping("/delete-message{id}")
	 public String deletemail(HttpServletRequest request, Model model,@PathVariable("id") Long id ) {
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		if(user!=null) {
			model.addAttribute("user", user);
			model.addAttribute("messages",mr.findByUser(user));
			mr.deleteById(id);
		
		
		}
		HttpSession session2 = request.getSession();
		User user2 =(User)session.getAttribute("user1");
		if(user2!=null) {
			model.addAttribute("user", user2);
			model.addAttribute("messages",mr.findByUser(user2));
			
		
		
		}


		return "ClientProfessionnel/messages";
}
	
	
	
	
	
	
	
	
	
	@PostMapping("/Admin/sendMessage{id}")
	    public String sendmessagetoUser(@ModelAttribute("newMessage") message newMessage,Model model,@PathVariable("id") long id,HttpServletRequest request){
		System.err.println("zhgfzgehfhgzegvfezfhvzehgvfhgzevhgvfzhegvfhzgvehgf");
		
		System.err.println(newMessage.getMessage());
		System.err.println(id);
		
		
		message msg=new message();
		msg.setMessage(newMessage.getMessage());
		msg.setUser(ur.getById(id));
		mr.save(msg);
		
		 List<User> u=ur.userbyRole();
		 model.addAttribute("users", u);
			model.addAttribute("inboxes",ir.findAll());
		
	
		return "Admin/messages";
		
		
	}
	
	@PostMapping("/sendMessage")
    public String sendmessagetoAdmin(@ModelAttribute("newInbox") message newInbox,HttpServletRequest request,Model model){
	System.err.println("zhgfzgehfhgzegvfezfhvzehgvfhgzevhgvfzhegvfhzgvehgf");
	
	System.err.println(newInbox.getMessage());
System.out.println("salut0");
	HttpSession session = request.getSession();
	User user =(User)session.getAttribute("user1");
	if(user!=null) {
		inbox msg=new inbox();
		model.addAttribute("user",user);
		model.addAttribute("messages",mr.findByUser(user));
		msg.setUserName(user.getFirstName()+" "+user.getLastName());
		msg.setMessage(newInbox.getMessage());
		
		ir.save(msg);
	
	}
	
	
	

	return "ClientProfessionnel/messages";
	
	
}
	
@GetMapping("/Admin/delete-inbox{id}")
public String deletemsg(Model model,@PathVariable("id") Long id) {
	ir.deleteById(id);
	 List<User> u=ur.userbyRole();
	 model.addAttribute("users", u);
		model.addAttribute("inboxes",ir.findAll());
	 return "Admin/messages";
} 



	 @GetMapping("/Admin/lois")
	 public String loi() {
		 return "Admin/lois";
	 }
	 
	 @GetMapping("/Admin/comments")
	 public String comments() {
		 return "Admin/comments";
	 }
	
}
