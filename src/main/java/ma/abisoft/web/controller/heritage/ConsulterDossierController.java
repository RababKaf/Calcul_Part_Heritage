package ma.abisoft.web.controller.heritage;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.net.MediaType;

import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Argent;
import ma.abisoft.persistence.model.heritage.Autre;
import ma.abisoft.persistence.model.heritage.DossierH;
import ma.abisoft.persistence.model.heritage.Indeminite;
import ma.abisoft.persistence.model.heritage.Personne;
import ma.abisoft.persistence.model.heritage.Prelevement;
import ma.abisoft.persistence.model.heritage.Propriete;
import ma.abisoft.persistence.model.heritage.ProprieteComerciale;
import ma.abisoft.persistence.model.heritage.Terain;

import ma.abisoft.service.heritage.AjouterServiceH;
import ma.abisoft.service.heritage.ConsulterServiceH;
import ma.abisoft.web.util.GenericResponse;
import javax.*;

@Controller
public class ConsulterDossierController {
	
	@Autowired
    private ConsulterServiceH consulterService;
	
	@Autowired
	private AjouterServiceH ajouterService;
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("ClientProfessionnel/consulterDossier")
	public String consulterDossier(Model model, HttpServletRequest request) {

		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		if(user!=null) {
			model.addAttribute("user",  userRepository.getById(user.getId()));
			model.addAttribute("office",user.getOffice());
		}
		
		model.addAttribute("dossiers",consulterService.getAllDossierByuser(user.getId()));
		
		return "ClientProfessionnel/consulterDossier";
	}
	
	
	
	@PostMapping("ClientProfessionnel/consulterDossier/loadDossier")
	@ResponseBody
	public HashMap<String, Object> findDossier(@RequestParam("numero_dossier1") String numeroDossier1) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy / MM / dd");
		HashMap<String, Object> result = new HashMap<String, Object>();
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));

    	
		System.out.println(dossier);
		System.out.println(dossier.getNumero());
		String dateDossier = formatter.format(dossier.getDateDossierMiladi());
		
		
		result.put("dossier", dossier);
		

		
		
		
		result.put("dateDossier", dateDossier);
		
		
		return result;
	}
	
	
	
	
	
	//@RequestMapping(value="ClientProfessionnel/consulterDossier/loadTemoinsNN{numeroDossier1}",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	//@PostMapping("ClientProfessionnel/consulterDossier/loadTemoinsNN{numeroDossier1}")
	//@RequestMapping(value="/IBureau/Charge/{regionId}",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	//@RequestMapping(value="ClientProfessionnel/consulterDossier/loadTemoinsNN",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
//	@GetMapping("/ClientProfessionnel/consulterDossier/loadTemoinsNN/{numeroDossier1}")
//	@ResponseBody
//	@Produces(MediaType.APPLICATION_JSON_VALUE)
//	
	
	@RequestMapping(value="ClientProfessionnel/consulterDossier/loadTemoinsNN",method=RequestMethod.GET, produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	//@GetMapping("ClientProfessionnel/consulterDossier/loadTemoinsNN")
	@ResponseBody
	public List<String> findTemoinDossier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		System.out.println("it s me : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
     	List<Personne> temoins = ajouterService.getPersonneByroleIdAndBynumeroDossierl(Long.parseLong(numeroDossier1), Long.parseLong("3"));
	    List<String> temoins1=new ArrayList<>();
	       
	       System.out.println(temoins.size());
	       for(int i=0;i<temoins.size();i++) {
	    	   String nom= temoins.get(i).getNom()+" "+temoins.get(i).getPrenom() ;
	    	   
	    	   temoins1.add(nom+"_"+temoins.get(i).getId());
	       }
	       
	       System.out.println(temoins1.size());
	       
	       return temoins1;
		
	}
	
	@RequestMapping(value="ClientProfessionnel/consulterDossier/loadAutres",method=RequestMethod.GET, produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	//@GetMapping("ClientProfessionnel/consulterDossier/loadTemoinsNN")
	@ResponseBody
	public List<String> findAutreDossier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		System.out.println("it s me : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
		Propriete propriete=defunt.getProprite();
		List<Autre> autres=propriete.getAutres();
		List<String> autres1=new ArrayList<>();
     	
	       
	       System.out.println("autre size :"+autres.size());
	       for(int i=0;i<autres.size();i++) {
	    	   String nom= autres.get(i).getType()+" "+autres.get(i).getPrix() ;
	    	   
	    	   autres1.add(nom+"_"+autres.get(i).getId());
	       }
	       
	       System.out.println(autres1.size());
	       
	       return autres1;
		
	}
	
	@RequestMapping(value="ClientProfessionnel/consulterDossier/loadTijaris",method=RequestMethod.GET, produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	//@GetMapping("ClientProfessionnel/consulterDossier/loadTemoinsNN")
	@ResponseBody
	public List<String> findTijariDossier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		System.out.println("it s me tijari: "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
		Propriete propriete=defunt.getProprite();
		List<ProprieteComerciale> propCom=propriete.getProprieteComerciales();
		List<String> propCom1=new ArrayList<>();
     	
	       
	       System.out.println("tijari size :"+propCom.size());
	       for(int i=0;i<propCom.size();i++) {
	    	   String nom= propCom.get(i).getAdresse()+" "+propCom.get(i).getPrix() ;
	    	   
	    	  propCom1.add(nom+"_"+propCom.get(i).getId());
	       }
	       
	       System.out.println(propCom1.size());
	       
	       return propCom1;
		
	}
	
	@RequestMapping(value="ClientProfessionnel/consulterDossier/loadAreds",method=RequestMethod.GET, produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<String> findAredDossier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		System.out.println("it s me ared : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
		Propriete propriete=defunt.getProprite();
		List<Terain> terains=propriete.getTerain();
		List<String> terains1=new ArrayList<>();
     	
	       
	       System.out.println("tijari size :"+terains.size());
	       for(int i=0;i<terains.size();i++) {
	    	   String nom= terains.get(i).getAdresse()+" "+terains.get(i).getPrix() ;
	    	   
	    	  terains1.add(nom+"_"+terains.get(i).getId());
	       }
	       
	       System.out.println(terains1.size());
	       
	       return terains1;
		
	}
	
	
	
	
	//@RequestMapping(value="ClientProfessionnel/consulterDossier/loadProprieteObject",method=RequestMethod.GET)
	@GetMapping("ClientProfessionnel/consulterDossier/loadProprieteArgent")
	@ResponseBody
	public HashMap<String, Object> findArgent(@RequestParam("numeroDossier1") String numeroDossier1){
		
		HashMap<String, Object> result = new HashMap<String, Object>();
		System.out.println("it s me propriete : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
		Propriete propriete=defunt.getProprite();
		Argent argent=propriete.getArgent();
//		List<ProprieteComerciale> propComs=propriete.getProprieteComerciales();
//		List<Autre> autres=propriete.getAutres();
//		List<Terain> terains=propriete.getTerain();
     	
		Prelevement prelevement=defunt.getPrelevement();
		
		Personne wasiya=consulterService.getWasiya(Long.parseLong(numeroDossier1),"وصية");
		
		//result.put("wasiya", wasiya);
		//result.put("prelevement", prelevement);	
		System.out.println(argent.getSomme());
		if(argent.getSomme()!=null)
		  result.put("argent", argent);
		
		return result;
		
	}
	
	@GetMapping("ClientProfessionnel/consulterDossier/loadProprietePrelevement")
	@ResponseBody
	public HashMap<String, Object> findPrelevement(@RequestParam("numeroDossier1") String numeroDossier1){
		
		HashMap<String, Object> result = new HashMap<String, Object>();
		System.out.println("it s me propriete prelevement : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
				
     	
		Prelevement prelevement=defunt.getPrelevement();
		
		
		
		//result.put("wasiya", wasiya);
		//result.put("prelevement", prelevement);	
		System.out.println(prelevement.getDette());
		//System.out.println(argent.getSomme());
		if(prelevement.getId()!=null)
		  result.put("prelevement", prelevement);
		
		return result;
		
	}
	
	@GetMapping("ClientProfessionnel/consulterDossier/loadProprieteTestament")
	@ResponseBody
	public HashMap<String, Object> findTestamentDossier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		HashMap<String, Object> result = new HashMap<String, Object>();
		System.out.println("it s me propriete : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
		Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier1), Long.parseLong("1"));
		Propriete propriete=defunt.getProprite();
		Argent argent=propriete.getArgent();
//		List<ProprieteComerciale> propComs=propriete.getProprieteComerciales();
//		List<Autre> autres=propriete.getAutres();
//		List<Terain> terains=propriete.getTerain();
     	
		Prelevement prelevement=defunt.getPrelevement();
		
		Personne wasiya=consulterService.getWasiya(Long.parseLong(numeroDossier1),"وصية");
		System.out.println("testament");
		//result.put("wasiya", wasiya);
		//result.put("prelevement", prelevement);	
		System.out.println(argent.getSomme());
		if(wasiya.getId()!=null)
		  result.put("wasiya", wasiya);
		
		return result;
		
	}
	
	    @GetMapping("ClientProfessionnel/consulterDossier/Temoin/{id}")
		@ResponseBody
		public HashMap<String, Object> findTemoin(@PathVariable("id") String idTemoin) {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			HashMap<String, Object> result = new HashMap<String, Object>();
			System.out.println("temoin de ouf");
			Personne temoin = ajouterService.findbyid(Long.parseLong(idTemoin));
			
			System.out.println("me cin "+temoin.getCin());
			String dateNaissance = formatter.format(temoin.getDate_de_naissance());
			String dateExpiration = formatter.format(temoin.getDate_expiration_cin());
			result.put("temoin", temoin);
			result.put("dateNaissance", dateNaissance);	
			result.put("dateExpiration", dateExpiration);
			
			
			return result;
		}
	    
	    
	    @GetMapping("ClientProfessionnel/consulterDossier/Tijari/{id}")
		@ResponseBody
		public HashMap<String, Object> loadTijariInfo(@PathVariable("id") String id) {
			
			HashMap<String, Object> result = new HashMap<String, Object>();
			Optional<ProprieteComerciale> prop= consulterService.findTijari(Long.parseLong(id));
			
			if (prop.isPresent()) {
			   ProprieteComerciale prop1 = prop.get();
			   result.put("tijari", prop1);
			}
					
			
			return result;
		}
	    
	    
	    @GetMapping("ClientProfessionnel/consulterDossier/Autre/{id}")
		@ResponseBody
		public HashMap<String, Object> loadAutreInfo(@PathVariable("id") String id) {
			
			HashMap<String, Object> result = new HashMap<String, Object>();
			Optional<Autre> autre= consulterService.findAutre(Long.parseLong(id));
			
			if (autre.isPresent()) {
			   Autre autre1 = autre.get();
			   result.put("autre", autre1);
			}
					
			
			return result;
		}
	    
	    @GetMapping("ClientProfessionnel/consulterDossier/Ared/{id}")
		@ResponseBody
		public HashMap<String, Object> loadAredInfo(@PathVariable("id") String id) {
			
			HashMap<String, Object> result = new HashMap<String, Object>();
			Optional<Terain> terain= consulterService.findAred(Long.parseLong(id));
			
			if (terain.isPresent()) {
			   Terain terain1 = terain.get();
			   result.put("ared", terain1);
			}
					
			
			return result;
		}
	    
	    
	    
	    // update argent
	    @PostMapping("ClientProfessionnel/consulterDossier/updateArgent")
		@ResponseBody
		public GenericResponse updateArgent(@RequestParam("id_argent") String id,
				@RequestParam("sommeArgent") String prix
				) {
			
			try {
				if(id.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				else {
				Optional<Argent> argent=consulterService.findArgent(Long.parseLong(id));
				if (argent.isPresent()) {
				    Argent argent1 = argent.get();
				    if(prix.isEmpty())
				    	return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة عليك اختيار ملف ", "error");
				    else {
				   argent1.setSomme(Long.parseLong(prix));
				   ajouterService.ajouterArgent(argent1);
				    }
				}
				return new GenericResponse("تم تعديل البيانات بنجاح", "success");
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
			}
			
			
			
		}
	    
	 // update Tijari
	    @PostMapping("ClientProfessionnel/consulterDossier/updateTijari")
		@ResponseBody
		public GenericResponse updateTijari(@RequestParam("id") String id,
				@RequestParam("prix") String prix,
				@RequestParam("surface") String surface,
				@RequestParam("adresse") String adresse
				) {
			
			try {
				if(id.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				else {
				Optional<ProprieteComerciale> prop= consulterService.findTijari(Long.parseLong(id));
				
				if (prop.isPresent()) {
				   ProprieteComerciale prop1 = prop.get();
				   prop1.setAdresse(adresse);
				   prop1.setPrix(Long.parseLong(prix));
				   prop1.setSurface(Double.parseDouble(surface));
				   
				   ajouterService.ajouterComerciale(prop1);
				}
				
				return new GenericResponse("تم تعديل البيانات بنجاح", "success");
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
			}
			
			
			
		}
	    
	    
	 // update Ared
	    @PostMapping("ClientProfessionnel/consulterDossier/updateAred")
		@ResponseBody
		public GenericResponse updateAred(@RequestParam("id") String id,
				@RequestParam("prix") String prix,
				@RequestParam("surface") String surface,
				@RequestParam("adresse") String adresse
				) {
			
			try {
				if(id.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				else {
				Optional<Terain> terain= consulterService.findAred(Long.parseLong(id));
				
				if (terain.isPresent()) {
				   Terain terain1 = terain.get();
				   terain1.setAdresse(adresse);
				   terain1.setPrix(Long.parseLong(prix));
				   terain1.setSurface(Double.parseDouble(surface));
				   ajouterService.ajouterTerain(terain1);
				   
				}
									
				return new GenericResponse("تم تعديل البيانات بنجاح", "success");
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
			}
	    }
			
			// update Autre
		    @PostMapping("ClientProfessionnel/consulterDossier/updateAutre")
			@ResponseBody
			public GenericResponse updateAutre(@RequestParam("id") String id,
					@RequestParam("prix") String prix,
					@RequestParam("type") String type
					) {
				
		    	
				try {
					if(id.isEmpty())
						return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
					else {
					Optional<Autre> autre= consulterService.findAutre(Long.parseLong(id));
					
					if (autre.isPresent()) {
					   Autre autre1 = autre.get();
					   				   
					   autre1.setType(type);
					   autre1.setPrix(Long.parseLong(prix));
					   
					   ajouterService.ajouterAutre(autre1);
					   
					}
					
					return new GenericResponse("تم تعديل البيانات بنجاح", "success");}
				} catch (Exception e) {
					e.printStackTrace();
					return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
				}
			
			
			
		}
	    
	 // update Prelevement
	    @PostMapping("ClientProfessionnel/consulterDossier/updatePrelevement")
		@ResponseBody
		public GenericResponse updatePrelevement(@RequestParam("id_prele") String id,
				@RequestParam("doyon") String doyon,
				@RequestParam("tajhez") String tajhez
				) {
			
			try {
				if(id.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				else {
				System.out.println("update prelevemnent");
				Optional<Prelevement> prele=consulterService.findPrelevement(Long.parseLong(id));
				if (prele.isPresent()) {
				    Prelevement prele1 = prele.get();
				   prele1.setDette(Double.parseDouble(doyon));
				   prele1.setPreparation_defunt(Double.parseDouble(tajhez));
				   ajouterService.ajouterPrelevement(prele1);
				}
				
				return new GenericResponse("تم تعديل البيانات بنجاح", "success");
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
			}
			
			
			
		}
	
	    
	 // update Wasiya
	    @PostMapping("ClientProfessionnel/consulterDossier/updateWasiya")
		@ResponseBody
		public GenericResponse updateWasiya(@RequestParam("cni") String cni,
				@RequestParam("prenom") String prenom,
				@RequestParam("nom") String nom,
				@RequestParam("id_wasiya") String id,
				@RequestParam("indeminite") String part
				) {
			
			try {
				if(id.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				else {
				Personne wasiya=ajouterService.findbyid(Long.parseLong(id));
				if(cni.isEmpty())
					return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة عليك اختيار ملف ", "error");
				else {
				    wasiya.setCin(cni);
				    wasiya.setNom(nom);
				    wasiya.setPrenom(prenom);
				    Indeminite ind=wasiya.getIndeminite();
				    ind.setParts(part);
				   
				   ajouterService.ajouterPersonne(wasiya);
				   ajouterService.ajouterIndeminite(ind);
				return new GenericResponse("تم تعديل البيانات بنجاح", "success");
				}
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة", "error");
			}
			
			
			
		}
	
	    @PostMapping("ClientProfessionnel/consulterDossier/updateTemoin")
		@ResponseBody
		public HashMap<String, Object> updateTemoin(
				@RequestParam("cni_temoin") String cin_temoin,
				@RequestParam("nom_temoin") String nom_temoin,
				@RequestParam("prenom_temoin") String prenom_temoin,
				@RequestParam("id_temoin") String id_temoin,
				@RequestParam("job_temoin") String job_temoin,
				@RequestParam("date_naissance_temoin") String date_naissance_temoin,
				@RequestParam("date_expiration_carte_temoin") String date_expiration_temoin,
				@RequestParam("pere_temoin") String pere_temoin,
				@RequestParam("sexe_temoin") String sexe_temoin,
				@RequestParam("addresse_temoin") String addresse_temoin){
			
			HashMap<String, Object> result = new HashMap<String, Object>();
			
			try {
				if(id_temoin.isEmpty()) {
					result.put("message", new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error").getMessage());
					return result;
				}
				else {
				Personne temoin = ajouterService.findbyid(Long.parseLong(id_temoin));
				System.out.println("update temoin :"+id_temoin);
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
				
				if(cin_temoin.isEmpty()) {
					
				result.put("message", new GenericResponse("لم يتم تعديل البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error").getMessage());
				return result;
				}
				else {
				temoin.setCin(cin_temoin);
				temoin.setNom(nom_temoin);
				temoin.setPrenom(prenom_temoin);
				temoin.setProfession(job_temoin);
				temoin.setDate_de_naissance(formatter.parse(date_naissance_temoin));
				temoin.setDate_expiration_cin(formatter.parse(date_expiration_temoin));
				temoin.setNomPere(pere_temoin);
				temoin.setAdresse(addresse_temoin);
				temoin.setSexe(sexe_temoin);
				
				ajouterService.ajouterPersonne(temoin);
				String dateNaissance = formatter.format(temoin.getDate_de_naissance());
				String dateExpiration = formatter.format(temoin.getDate_expiration_cin());
				
				result.put("temoin", temoin);
				result.put("dateNaissance", dateNaissance);
				result.put("dateExpiration", dateExpiration);
				result.put("message", new GenericResponse("تم تعديل الشاهد بنجاح", "error").getMessage());
				return result;
				}
				}
				
			} catch (Exception e) {
				e.printStackTrace();
				result.put("message", new GenericResponse("لم يتم تعديل الشاهد، المرجوا إعادة المحاولة", "error").getMessage());
				return result;
			}
		}
	
	    
	    @PostMapping("ClientProfessionnel/consulterDossier/deleteTemoin")
		@ResponseBody
		public GenericResponse deleteTemoigner(@RequestParam("id_temoin") String id_temoin,
											@RequestParam("numero_dossier") String numero_dossier) {
			
			try {
				if(id_temoin.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف ", "error");
				else {
			consulterService.deletePersonne(Long.parseLong(id_temoin));
				return new GenericResponse("تم حذف الشاهد بنجاح", "success");
				}
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم حذف الشاهد، المرجو اعادة المحاولة", "error");
			}
		}
	    
	    
	
	
	
	
	
	
	
	
	
	
	
	@PostMapping("ClientProfessionnel/consulterDossier/ajouterRemarque")
	@ResponseBody
	public List<Object> ajouterRemarque(@RequestParam("numero_dossier1") String numeroDossier,
			@RequestParam("remarqueDossier") String remarqueDossier) {
		List<Object> result = new ArrayList<Object>();
		try {
			if(remarqueDossier.isEmpty()) {
				result.add(new GenericResponse("    لم يتم اضافة الملاحظة، المرجو اعادة المحاولة عليك اختيار ملف   ", "error"));
				return result;
			}
			if(numeroDossier.isEmpty()) {
				
				result.add(new GenericResponse("المرجوا التأكد من مكونات الملاحظة", "error"));
			return result;
			}
			DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier));
			dossier.setCommentaire(remarqueDossier);
			consulterService.ajouterDossier(dossier);
			result.add(new GenericResponse("تم اضافة الملاحظة بنجاح", "success"));
			result.add(remarqueDossier);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.add(new GenericResponse("المرجوا التأكد من مكونات الملاحظة", "error"));
			return result;
		}
	}
	
	
	@PostMapping("ClientProfessionnel/consulterDossier/ajouterNomDossier")
	@ResponseBody
	public List<Object> ajouterNom(@RequestParam("numeroDossier") String numeroDossier,
			@RequestParam("nomDossier") String nomDossier) {
		List<Object> result = new ArrayList<Object>();
		try {
			if(nomDossier.isEmpty()){
				result.add(new GenericResponse("    لم يتم عديل البيانات ، المرجو اعادة المحاولة عليك اختيار ملف   ", "error"));
				return result;
			}
				
			DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier));
			
			dossier.setNomDossier(nomDossier);
			consulterService.ajouterDossier(dossier);
			result.add(new GenericResponse("تم تعديل البيانات  بنجاح", "success"));
			result.add(nomDossier);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.add(new GenericResponse("   لم يتم  تعديل البيانات  ,المرجو اعادة المحاولة  ", "error"));
			return result;
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteDossier")
	@ResponseBody
	public GenericResponse deleteDossier(@RequestParam("numero_dossier") String numero_dossier) {
		
		try {
			if(numero_dossier.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			
			consulterService.deleteDossier(Long.parseLong(numero_dossier));
			return new GenericResponse("تم حذف الملف بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف الملف، المرجو اعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteArgent")
	@ResponseBody
	public GenericResponse deleteArgent(@RequestParam("id") String id) {
		
		try {
			if(id.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			consulterService.deleteArgent(Long.parseLong(id));
			return new GenericResponse("تم حذف النقود بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف النقود ، المرجو اعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteTijari")
	@ResponseBody
	public GenericResponse deleteTijari(@RequestParam("id") String id) {
		
		try {
			if(id.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			consulterService.deleteTijari(Long.parseLong(id));
			return new GenericResponse("تم حذف عقار تجاري  بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف عقار تجاري ، المرجو اعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteAred")
	@ResponseBody
	public GenericResponse deleteAred(@RequestParam("id") String id) {
		
		try {
			if(id.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			consulterService.deleteTerain(Long.parseLong(id));
			return new GenericResponse("تم حذف القطعة الارضية بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف القطعة  الارضية، المرجو اعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteAutre")
	@ResponseBody
	public GenericResponse deleteAutre(@RequestParam("id") String id) {
		
		try {
			if(id.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			consulterService.deleteAutre(Long.parseLong(id));
			return new GenericResponse("تم حذف النوع بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف النوع الاخر  ، المرجو اعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/deleteWasiya")
	@ResponseBody
	public GenericResponse deleteWasiya(@RequestParam("id") String id) {
		
		try {
			if(id.isEmpty())
				return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
			consulterService.deletePersonne(Long.parseLong(id));
			return new GenericResponse("تم حذف الوصية بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم حذف الوصية، المرجو اعادة المحاولة", "error");
		}
	}

	
	@RequestMapping(value="ClientProfessionnel/consulterDossier/loadHeritierNN",method=RequestMethod.GET, produces=org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	//@GetMapping("ClientProfessionnel/consulterDossier/loadTemoinsNN")
	@ResponseBody
	public List<String> searchHeritier(@RequestParam("numeroDossier1") String numeroDossier1){
		
		System.out.println("it s me : "+numeroDossier1);
		
		DossierH dossier = consulterService.getDossierById(Long.parseLong(numeroDossier1));
     	List<Personne> temoins = ajouterService.getPersonneByroleIdAndBynumeroDossierl(Long.parseLong(numeroDossier1), Long.parseLong("2"));
	    List<String> temoins1=new ArrayList<>();
	       
	       System.out.println(temoins.size());
	       for(int i=0;i<temoins.size();i++) {
	    	   String nom= temoins.get(i).getNom()+" "+temoins.get(i).getPrenom() ;
	    	   
	    	   temoins1.add(nom+"_"+temoins.get(i).getId());
	       }
	       
	       System.out.println(temoins1.size());
	       
	       return temoins1;
		
	}
	
	@GetMapping("ClientProfessionnel/consulterDossier/Heritier/{id}")
	@ResponseBody
	public HashMap<String, Object> loadHeritier(@PathVariable("id") String idHeritier) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		HashMap<String, Object> result = new HashMap<String, Object>();
		System.out.println("Heritier de ouf");
		Personne Heritier = ajouterService.findbyid(Long.parseLong(idHeritier));
		
		System.out.println("me cin "+Heritier.getCin());
		
		
		String dateNaissanceH = formatter.format(Heritier.getDate_de_naissance());
		
		System.out.println(dateNaissanceH);
		
		
		result.put("dateNaissance", dateNaissanceH);	
		result.put("heritier", Heritier);
		
		
		
		
		return result;
	}
	
	@PostMapping("ClientProfessionnel/consulterDossier/updateHeritier")
	@ResponseBody
	public HashMap<String, Object> updateHeritier(
			
			@RequestParam("nom_heritier") String nom_heritier,
			@RequestParam("prenom_heritier") String prenom_heritier,
			@RequestParam("id_heritier") String id_heritier,
			@RequestParam("date_naissance_heritier") String date_naissance_heritier
			)
			{
		
		HashMap<String, Object> result = new HashMap<String, Object>();
		
		try {
			
			Personne heritier = ajouterService.findbyid(Long.parseLong(id_heritier));
			System.out.println("update heritier :"+id_heritier);
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
			
			heritier.setNom(nom_heritier);
			heritier.setPrenom(prenom_heritier);
			heritier.setDate_de_naissance(formatter.parse(date_naissance_heritier));
			
			ajouterService.ajouterPersonne(heritier);
			String dateNaissance = formatter.format(heritier.getDate_de_naissance());
			
			
			result.put("heritier", heritier);
			result.put("dateNaissance", dateNaissance);
			
			result.put("message", new GenericResponse("تم تعديل الوريت بنجاح", "error").getMessage());
			return result;
			
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", new GenericResponse("لم يتم تعديل الوريت ، المرجوا إعادة المحاولة", "error").getMessage());
			return result;
		}
	}
	
	 @PostMapping("ClientProfessionnel/consulterDossier/deleteHeritier")
		@ResponseBody
		public GenericResponse deleteHeritier(@RequestParam("id_heritier") String id_heritier,
											@RequestParam("numero_dossier") String numero_dossier) {
			
			try {
				if(id_heritier.isEmpty())
					return new GenericResponse("لم يتم حدف البيانات، المرجو اعادة المحاولة عليك اختيار ملف", "error");
				
			consulterService.deletePersonne(Long.parseLong(id_heritier));
				return new GenericResponse("تم حذف  الوريث  بنجاح", "success");
			} catch (Exception e) {
				e.printStackTrace();
				return new GenericResponse("لم يتم حذف الوريث  ، المرجو اعادة المحاولة", "error");
			}
		}
	
	
	

}
