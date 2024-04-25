package ma.abisoft.web.controller.heritage;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.OfficeRepository;
import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.service.UserService;
import ma.abisoft.service.heritage.VilleService;
import ma.abisoft.service.heritage.regionService;

@Controller
public class parametre {
	@Autowired
	UserRepository userRepository;
	@Autowired
	OfficeRepository officeRepository;
	@Autowired
	regionService rs;
	@Autowired
	VilleService vs;
	@Autowired
	VilleRepository vr;
	
	@GetMapping("ClientProfessionnel/supprimerCompte")
	 public String delete(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		if(user!=null) {
			model.addAttribute("user", user);
		}
		
		return "ClientProfessionnel/supprimerCompte";
	}
	
	@GetMapping("ClientProfessionnel/modInfo")
	 public String mod(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
	
		if(user!=null) {
			
			model.addAttribute("user",  userRepository.getById(user.getId()));
			model.addAttribute("office",user.getOffice());
		
		
		}
		
		return "ClientProfessionnel/modifierInfo";
	}
	
	@PostMapping("/ClientProfessionnel/update")
	public String update(HttpServletRequest request,Model model,@RequestParam("image")  MultipartFile file,@RequestParam("firstName") String firstName,@RequestParam("lastName") String lName,@RequestParam("tel") String tel,@RequestParam("email") String email) throws IOException, SerialException, SQLException{
		HttpSession session = request.getSession();
		User userr=(User)session.getAttribute("user1");
		if(userr!=null) {
			model.addAttribute("user", userr);
		
			User user=userRepository.getById(userr.getId());
			 byte[] bytes = file.getBytes();
		     Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
		     
		
		System.err.println(blob.length());
		User existingUser = userRepository.getById(user.getId());
		existingUser.setId(user.getId());
		existingUser.setFirstName(firstName);
		existingUser.setLastName(lName);
		existingUser.setEmail(email);
		existingUser.setTel(tel);
		
		if(user.getImage()==null)
			{if(blob.length()!=0)
				existingUser.setImage(blob);}
			else {
	if(blob.length()==0) {
		existingUser.setImage(user.getImage());
		System.err.println("so"+user.getImage().length());
		
	}
	else
		existingUser.setImage(blob);}
		userRepository.save(existingUser);}

		HttpSession session1 = request.getSession();
		User user1 =(User)session1.getAttribute("user1");
	
		if(user1!=null) {
			
			model.addAttribute("user", user1);
			model.addAttribute("office",user1.getOffice());
			model.addAttribute("userr", userRepository.getById(user1.getId()));
		
		}
		return "redirect:/ClientProfessionnel/modInfo";}
		
	
	
	@GetMapping("ClientProfessionnel/modBureau")
	 public String modd(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		List<Region> region = rs.findAllRegions();
		
		System.err.println("hiiiiiiii");
		model.addAttribute("region", region);
//		List<Ville> cities= vs.findAllVilles();
//		model.addAttribute("cities",cities);
		if(user!=null) {
			model.addAttribute("user",  userRepository.getById(user.getId()));
			model.addAttribute("office",user.getOffice());
			Ville v=vr.getById(user.getOffice().getVille().getId());
			model.addAttribute("ville",v );
			//System.err.println("------------------------------------------"+v.getCityName());
		}
		
		return "ClientProfessionnel/modifierBureau";
	}
	
	
	
	
	
	
	
	
	
	
	
	@PostMapping("/ClientProfessionnel/updateoff/{id}")
	public String updateoff(@PathVariable Long id,HttpServletRequest request,Model model,@RequestParam("image") MultipartFile file,@RequestParam("label") String label,@RequestParam("officeEmail") String email,@RequestParam("adresse") String adresse,@RequestParam("fax") String fax,@RequestParam("fix") String fix) throws IOException, SerialException, SQLException {
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		if(user!=null) {
			model.addAttribute("user", user);
		System.err.println("-----------------------------------------------------------------------------------------------------");
			byte[] bytes = file.getBytes();
		     Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);
	
		
		Office existingOffice = user.getOffice();
		existingOffice.setId(existingOffice.getId());
		existingOffice.setLabel(label);
		existingOffice.setFax(fax);
		existingOffice.setFix(fix);
		existingOffice.setOfficeEmail(email);
		existingOffice.setAdresse(adresse);
		//System.err.println("jfjdkfjskjfs"+id);
		if(existingOffice.getImage()==null)
		{if(blob.length()!=0)
			existingOffice.setImage(blob);}
		else {
		if(blob.length()==0) {
			existingOffice.setImage(existingOffice.getImage());
			System.err.println("so"+existingOffice.getImage().length());
			
		}
		else
			existingOffice.setImage(blob);}
		existingOffice.setVille(vr.getById(id));
		
		
		
		// save updated dtudent object++
		officeRepository.save(existingOffice);}
		return "redirect:/ClientProfessionnel/modBureau";
		
	}

}

