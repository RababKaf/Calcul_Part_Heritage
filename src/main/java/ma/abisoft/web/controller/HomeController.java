package ma.abisoft.web.controller;

import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.MasaalaRepository;
import ma.abisoft.persistence.dao.heritage.OfficeRepository;
import ma.abisoft.persistence.dao.heritage.PartsRepository;
import ma.abisoft.persistence.dao.heritage.RegionRepository;
import ma.abisoft.persistence.dao.heritage.SommeRepository;
import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Argent;
import ma.abisoft.persistence.model.heritage.Masaala;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Parts;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Somme;
import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.service.heritage.OfficeServiceImplmt;
import ma.abisoft.service.heritage.VilleService;
import ma.abisoft.service.heritage.regionService;
//import net.sf.jasperreports.engine.JRDataSource;
//import net.sf.jasperreports.engine.JasperCompileManager;
//import net.sf.jasperreports.engine.JasperExportManager;
//import net.sf.jasperreports.engine.JasperFillManager;
//import net.sf.jasperreports.engine.JasperPrint;
//import net.sf.jasperreports.engine.JasperReport;
//import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@Controller
public class HomeController {
	@Autowired
	regionService rs;
	@Autowired
	VilleService vs;
	@Autowired
	VilleRepository vr;
	@Autowired
	OfficeServiceImplmt os;
	@Autowired
	OfficeRepository ro;
	@Autowired
	UserRepository ur;
	@Autowired 
	PartsRepository partsRepository;
	@Autowired 
	MasaalaRepository mr;
	@Autowired 
	SommeRepository sr;
    @Autowired
    ApplicationContext context;
	// private RegionRepository regionRepository;
	  @GetMapping("/")
	    public String getIndex() {
		  
		  mr.deleteAll();
		  sr.deleteAll();
		
	        return "public";
	    }
	 
	  @GetMapping("/loginn")
	    public String getauth() {
	        return "auth";
	    }
	  @PostMapping("/calculPagee")
	    public String getchose() {
	        return "chose";
	    }
//	  @GetMapping("/IBureau")
//	    public String getBr() {
//	        return "iBureau";
//	    } 
//	  @GetMapping("/registration.html")
//	   String yourPage(Model model) {
////	        List<Region> regions = regionRepository.findAll();
////     model.addAttribute("regions", regions);
//	        return "registration";
//	    }

	
	  
	  
	  
		@RequestMapping(value="/public",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
	public List<String> search(@RequestParam("part") String part,@RequestParam("relation_familiale") String relationFamiliale ) {
		  System.err.println("cvgvqshdvfhgsdfhsdhgfhsdfhgsdgfh");
		 
		  System.err.println(part);
		  System.err.println(relationFamiliale);
		  List<String> lst=new ArrayList<>();
		  // 1
		
		 //2
		String a=partsRepository.findConditionByRelationFamilialeAndPart(relationFamiliale,part);
		  System.err.println(partsRepository.findConditionByRelationFamilialeAndPart(relationFamiliale,part));
		  
		  lst.add(a);
		  return lst;
		}
	  
//		 @GetMapping("/pdf")
//		    @ResponseBody
////		    public void getPdf(@PathVariable String jrxml, HttpServletResponse response) throws Exception {
//		    public void getPdf(HttpServletResponse response) throws Exception {
//			 System.err.println("hello");
//		        //Get JRXML template from resources folder
////		        Resource resource = context.getResource("classpath:reports/" + jrxml + ".jrxml");
//		        Resource resource = context.getResource("classpath:reports/Simple_Blue_4.jrxml");
//		        //Compile to jasperReport
//		        InputStream inputStream = resource.getInputStream();
//		        JasperReport report = JasperCompileManager.compileReport(inputStream);
//		        //Parameters Set
//		        Map<String, Object> params = new HashMap<>();
//
//		        List<Masaala> cars = (List<Masaala>) mr.findAll();
//
//		        //Data source Set
//		        JRDataSource dataSource = new JRBeanCollectionDataSource(cars);
//		        params.put("datasource", dataSource);
//
//		        //Make jasperPrint
//		        JasperPrint jasperPrint = JasperFillManager.fillReport(report, params, dataSource);
//		        //Media Type
//		        response.setContentType(MediaType.APPLICATION_PDF_VALUE);
//		        //Export PDF Stream
//		        JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());
//		    }
  
	  
	
	  

		@RequestMapping(value="/p",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
		public String enregistrermaasala(@RequestParam("nombre") String nombre,@RequestParam("part") String part,@RequestParam("relation_familiale") String relationFamiliale,@RequestParam("cond") String cond  ) {
				//HashMap<String, Object> result = new HashMap<String, Object>();
		  System.err.println("save"+nombre);
		  System.err.println("save"+part);
		  
		Masaala masaala=new Masaala();
		masaala.setCond(cond);
		masaala.setNombre(nombre);
		masaala.setPart(part);
		masaala.setRelationFamiliale(relationFamiliale);
		mr.save(masaala);
		return "public";
				
			}
		
		@RequestMapping(value="/s",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
		  @ResponseBody
		public String enregistrerSomme(@RequestParam("wasiya") Double w,@RequestParam("doyon") Double d,@RequestParam("somme") Double s,@RequestParam("tajhez") Double t ) {
		
			
			System.err.println("savesavesave"+w);
			Double tarika;
			tarika=s-(t+d+w*s);
			  
			Somme somme=new Somme();
			somme.setDoyon(d);
			somme.setSomme(s);
			somme.setTajhez(t);
			somme.setTarika(tarika);
			somme.setWasiya(w*s);
			
			sr.save(somme);
		return "ss";
	
					
				}
	  
		  @GetMapping("/calculPage")
			  public String getPcPage(Model model) {
			  
			  
			  List<Masaala> masaala = mr.findAll();
			  List<Somme> sommee = sr.findAll();
			  Somme somme = sommee.get(0);
			 model.addAttribute("somme",somme);
			 if(somme.getTarika()<=0.0)
			return "invalidCalcul";
			 else {
			  if(masaala.isEmpty())
				  return "daawla";
			  else{
				model.addAttribute("masaala",masaala);
					
			        return "resultat"; }}
		  }
	  
	  
	    @GetMapping("/chercher{id}")
	
	    public String parVille(@PathVariable Long id,Model model ) {
	    	  List<Region> region = rs.findAllRegions();
			
		
				model.addAttribute("region", region);
				List<Ville> cities= vs.findAllVilles();
				model.addAttribute("cities",cities);
	    	
	    	
	    	Ville v=vr.getById(id);
	    	List<Office> off = os.findByVille(v);
	    	if(!off.isEmpty())
	    	{ model.addAttribute("office",off);
	        return "ChercherProf";}
	    	else { 
	    		
	    		  List<Region> r= rs.findAllRegions();
				  List<Office> office=ro.findAll();
			
					model.addAttribute("region", r);
					List<Ville> c= vs.findAllVilles();
					model.addAttribute("cities",c);
					
					model.addAttribute("office",office);
					return "invalidRecherche";
	    	}
	    }
	    
	  
	  
		  @GetMapping("/AboutSite")
	    public String getASite() {
				
	        return "aSite";
	    }
		  
		  
		  
		  @GetMapping("/links")
	    public String about() {
				
	        return "links.html";
	    }
		  
		  
		  @GetMapping("/successRegister.html")
		    public String sucess() {
					
		        return "successRegister";
		    }
		  
		  
		  
		  @GetMapping("/forgetPassword.html")
		    public String error() {
					
		        return "forgetPassword";
		    }
		  
		 
		  @GetMapping("/chercher")
		    public String lookfor(Model model) {
			  List<Region> region = rs.findAllRegions();
			  List<Office> office=ro.findAll();
		
				model.addAttribute("region", region);
				List<Ville> cities= vs.findAllVilles();
				model.addAttribute("cities",cities);
				
				model.addAttribute("office",office);
		        return "ChercherProf";
		    }
		 
		  
		  
		  @GetMapping("/{id}")
		    public String lookforprofil(Model model ,@PathVariable Long id) {
			  
			  model.addAttribute("o",ro.getById(id));
			  model.addAttribute("u",ur.findByOffice(ro.getById(id)));
			  
		        return "profil";
		    }
		  
		  
		  
	    @GetMapping("/project-item")
	    public String userIndex() {
	        return "project-item";
	    }

	    @GetMapping("/blog-item")
	    public String getserviceMaia() {
	        return "blog-item";
	    }
	    @GetMapping("/produits")
	    public String getproduitMaia() {
	        return "produits";
	    }
	    @GetMapping("/contact-us")
	    public String getcontactas() {
	        return "contact-us";
	    }
	    @GetMapping("/blog")
	    public String getressourceMaia() {
	        return "blog";
	    }
	    @GetMapping("/about-us")
	    public String getcentreAide() {
	        return "about-us";
	    }
	    @GetMapping("/services")
	    public String gettable() {
	        return "services";
	    }
	    @GetMapping("/portfolio")
	    public String getcomponents() {
	        return "portfolio";
	    }
	    @GetMapping("/typography")
	    public String gettypography() {
	        return "typography";
	    }
	    @GetMapping("/icon-variations")
	    public String geticon_variations() {
	        return "icon-variations";
	    }
	    @GetMapping("/icons")
	    public String geticons() {
	        return "icons";
	    }
	    @GetMapping("/login")
	    public String login() {
	        return "login";
	    }
	   
	    @GetMapping("/about")
	    public String getabout() {
	        return "about";
	    }
	    @GetMapping("/pricingbox")
	    public String getpricingbox() {
	        return "pricingbox";
	    }
	    @GetMapping("/testimonials")
	    public String gettestimonials() {
	        return "testimonials";
	    }
	    @GetMapping("/404")
	    public String get404() {
	        return "404";
	    }
	    @GetMapping("/portfolio-2cols")
	    public String getportfolio_2cols() {
	        return "portfolio-2cols";
	    }
	    @GetMapping("/portfolio-3cols")
	    public String getportfolio_3cols() {
	        return "portfolio-3cols";
	    }
	    @GetMapping("/portfolio-4cols")
	    public String getportfolio_4cols() {
	        return "portfolio-4cols";
	    }
	    @GetMapping("/portfolio-detail")
	    public String getportfolio_detail() {
	        return "portfolio-detail";
	    }
	    @GetMapping("/contact")
	    public String getcontact() {
	        return "contact";
	    }
	    @GetMapping("/blog-left-sidebar")
	    public String getblog_left_sidebar() {
	        return "blog-left-sidebar";
	    }
	    @GetMapping("/blog-right-sidebar")
	    public String getblog_right_sidebar() {
	        return "blog-right-sidebar";
	    }
	    @GetMapping("/post-left-sidebar")
	    public String getpost_left_sidebar() {
	        return "post-left-sidebar";
	    }
	    @GetMapping("/post-right-sidebar")
	    public String getpost_right_sidebar() {
	        return "post-right-sidebar";
	    }
	   
@GetMapping("updatePassword.html")
public String updt() {
    return "updatePassword";
}

@GetMapping("/expiredAccount.html")
public String orr() {
    return "expiredAccount";
}
@GetMapping("/invalidSession.html")
public String orry() {
    return "invalidSession";
}

	    @GetMapping("/access-denied")
	    public String accessDenied() {
	        return "/error/access-denied";
	    }
	    
	    
	   
	    
	    

	}
