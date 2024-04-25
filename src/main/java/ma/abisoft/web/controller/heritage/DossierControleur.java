package ma.abisoft.web.controller.heritage;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.chrono.HijrahChronology;
import java.time.chrono.HijrahDate;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;

import javax.persistence.Persistence;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;

import antlr.StringUtils;
import antlr.collections.List;
import ma.abisoft.persistence.dao.heritage.MasaalaProRepository;
import ma.abisoft.persistence.dao.heritage.MasaalaRepository;
import ma.abisoft.persistence.dao.heritage.PartsRepository;
import ma.abisoft.persistence.dao.heritage.PdfRepository;
import ma.abisoft.persistence.dao.heritage.PersonneRepository;
import ma.abisoft.persistence.dao.heritage.SommeProRepository;
import ma.abisoft.persistence.dao.heritage.SommeRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Argent;
import ma.abisoft.persistence.model.heritage.Autre;
import ma.abisoft.persistence.model.heritage.DossierH;
import ma.abisoft.persistence.model.heritage.Indeminite;
import ma.abisoft.persistence.model.heritage.Masaala;
import ma.abisoft.persistence.model.heritage.MasaalaPro;
import ma.abisoft.persistence.model.heritage.Pdf;
import ma.abisoft.persistence.model.heritage.Personne;
import ma.abisoft.persistence.model.heritage.Prelevement;
import ma.abisoft.persistence.model.heritage.Propriete;
import ma.abisoft.persistence.model.heritage.ProprieteComerciale;
import ma.abisoft.persistence.model.heritage.RelationFamiliale;
import ma.abisoft.persistence.model.heritage.RoleH;
import ma.abisoft.persistence.model.heritage.Somme;
import ma.abisoft.persistence.model.heritage.SommePro;
import ma.abisoft.persistence.model.heritage.Terain;


import ma.abisoft.service.heritage.AjouterServiceH;
import ma.abisoft.service.heritage.ConsulterServiceH;
import ma.abisoft.web.util.GenericResponse;




@Controller
public class DossierControleur {
	
	@Autowired
	private AjouterServiceH ajouterService;
	
	@Autowired
	private ConsulterServiceH consulterService;
	
	@Autowired 
	private MasaalaProRepository mr;
	
	@Autowired 
	private PartsRepository partsRepository;
	
	@Autowired 
	private SommeProRepository sr;
	
	@Autowired 
	private PdfRepository pdf;
	
	
	@GetMapping("ClientProfessionnel/ajouterDossier")
	public String ajouterDossier(HttpServletRequest request, Model model) {
		
		model.addAttribute("personnes",ajouterService.getPersonnesByRoleId(Long.parseLong("3")));
		HttpSession session = request.getSession();
		User user =(User)session.getAttribute("user1");
		if(user!=null) {
			model.addAttribute("user", user);
			model.addAttribute("office",user.getOffice());
		}
		
		
		mr.deleteAll();
		sr.deleteAll();
		pdf.deleteAll();
		
		//smodel.addAttribute("nombreSeancesAujourdhui",ajouterService.getDaySeances().size());
		return "ClientProfessionnel/ajouterDossier";
	}
	
	 
	
	
	@PostMapping("ClientProfessionnel/ajouterDossier/dossier")
	@ResponseBody
	public GenericResponse addDossier(@RequestParam("nom_dossier") String nom_dossier,
			@RequestParam("date_dossier") String date_dossier,
			@RequestParam("numero_dossier1") String numero_dossier,
			@RequestParam("logged_in_user") String logged_in_user
			         
            ){
		try {
			if(numero_dossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الملف، المرجوا إعادة المحاولة , يجب ملء حقل رقم الملف", "error");
			} 
			
			DossierH dossier1 = ajouterService.findDossier(Long.parseLong(numero_dossier));
			
			System.out.println("dossier");
			if (dossier1 != null) {
				return new GenericResponse("لم يتم إضافة الملف ، رقم الملف موجود بالفعل  المرجوا إعادة المحاولة", "error");
			    // Le dossier existe
			} else {
				DossierH dossier = new DossierH();
				
				
				if(date_dossier.isEmpty()) {
					return new GenericResponse(" لم يتم إضافة الملف، المرجوا إعادة المحاولة , يجب ملء حقل تاريخ الملف", "error");
				}
				dossier.setNumero(Long.parseLong(numero_dossier));
				
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
				
				
				Pdf pdff=new Pdf();
				pdff.setNumero(Long.parseLong(numero_dossier));
				pdf.save(pdff);
				
				
				LocalDate localDate = LocalDate.parse(date_dossier, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
				HijrahChronology hijriChrono = HijrahChronology.INSTANCE;
				HijrahDate hijriDate = hijriChrono.date(localDate);
				
				DateTimeFormatter hijriFormatter = DateTimeFormatter.ofPattern("EEEE dd MMMM yyyy", new Locale("ar"));
		        String hijriDateString = hijriDate.format(hijriFormatter);
				
				
				dossier.setDateHijri(hijriDateString);
				dossier.setNomDossier(nom_dossier);
				dossier.setDateDossierMiladi(formatter.parse(date_dossier));
				dossier.setDateCreation(new java.util.Date());
				
				User user= ajouterService.findUser(Long.parseLong(logged_in_user));
				dossier.setUser(user);
				
				
				ajouterService.ajouterDossier(dossier);
				
				user.getDossiers().add(dossier);
				
	            ajouterService.ajouterUser(user);

				System.out.println(nom_dossier);
				System.out.println(logged_in_user);

										          
				
				
				return new GenericResponse("تم إضافة الملف بنجاح", "success");
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الملف، المرجوا إعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/ajouterDossier/defunt")
	@ResponseBody
	public GenericResponse addDefunt(@RequestParam("sexe_defunt") String sexe_defunt,
			@RequestParam("numero_dossier1") String numeroDossier
			
			){
		try {
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الملف، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}
			    Personne defunt=new Personne();
				
				defunt.setSexe(sexe_defunt);
				System.out.println("mmmmmmmmmmmmmmm");
				RoleH role=ajouterService.findByIdRole(Long.parseLong("1"));
				defunt.getRoles().add(role);
				role.getPersonnes().add(defunt);
				DossierH dossier=ajouterService.findDossier(Long.parseLong(numeroDossier)); 
				dossier.getPersonnes().add(defunt);
				defunt.getDossiers().add(dossier);
			


			   ajouterService.ajouterPersonne(defunt);
			
			

			
			return new GenericResponse("تم إضافة المتوفي بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة المتوفي، المرجوا إعادة المحاولة", "error");
		}
	}
	
	@PostMapping("ClientProfessionnel/ajouterDossier/temoin")
	@ResponseBody
	public GenericResponse addTemoin1(
			@RequestParam(value = "cni_temoin", required = false) String cniTemoin,
			
			@RequestParam(value = "prenom_temoin", required = false) String prenomTemoin,
            @RequestParam(value = "nom_temoin", required = false) String nomTemoin,
            @RequestParam(value = "job_temoin", required = false) String jobTemoin,
            @RequestParam(value = "date_expiration_carte", required = false) String dateExpirationCarte,
            
            @RequestParam("numero_dossier1") String numeroDossier,
            @RequestParam(value = "date_naissance_temoin", required = false) String dateNaissanceTemoin,
            
            @RequestParam(value = "sexe_temoin", required = false) String sexeTemoin,
            @RequestParam(value = "pere_temoin", required = false) String pereTemoin,
            @RequestParam(value = "addresse_temoin", required = false) String addresseTemoin,
            @RequestParam(value = "personne_id", required = false) String id
            

            ){
		try {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
			System.out.println("temoin");
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الشاهد، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}			
			if(cniTemoin.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الشاهد ، المرجوا إعادة المحاولة , يجب ملء حقل البطاقة الوطنية ", "error");
			}
			if(dateExpirationCarte.isEmpty()) {
				return new GenericResponse("لم يتم إضافة الملف، المرجوا إعادة المحاولة , يجب ملء حقل تاريخ انتهاء صلاحية البطاقة الوطنية ", "error");
			}
			if(dateNaissanceTemoin.isEmpty()) {
				return new GenericResponse("لم يتم إضافة الملف، المرجوا إعادة المحاولة , يجب ملء حقل تاريخ الازدياد", "error");
			}
			DossierH dossier=ajouterService.findDossier(Long.parseLong(numeroDossier)); 
			
			  if (id.isEmpty()){ 
				  Personne  temoin=new Personne(); 
			  temoin.setCin(cniTemoin);
			  temoin.setDate_expiration_cin(formatter.parse(dateExpirationCarte));
			  temoin.setPrenom(prenomTemoin); temoin.setNom(nomTemoin);
			  temoin.setDate_de_naissance(formatter.parse(dateNaissanceTemoin));
			  temoin.setProfession(jobTemoin); temoin.setSexe(sexeTemoin);
			  temoin.setNomPere(pereTemoin); temoin.setAdresse(addresseTemoin);
			  
			  RoleH role3=ajouterService.findByIdRole(Long.parseLong("3"));
			  temoin.getRoles().add(role3);
			  
			  dossier.getPersonnes().add(temoin);
			  temoin.getDossiers().add(dossier);
			  ajouterService.ajouterPersonne(temoin); 
			  }else {
				  Personne temoin1=ajouterService.findbyid(Long.parseLong(id));
				  dossier.getPersonnes().add(temoin1);
				  temoin1.getDossiers().add(dossier);
				  ajouterService.ajouterPersonne(temoin1); 
			  }
				/*
				 * else if (org.apache.commons.lang3.StringUtils.isNotBlank(idlisteTemoins) ) {
				 * // Récupérer le temoin à partir de la liste des temoins existants // et
				 * l'associer au dossier en utilisant le numéro de dossier
				 * 
				 * 
				 * }
				 */
			 
			
			  GenericResponse response = new GenericResponse("تم إضافة الشاهد بنجاح", "success");
			    response.setCin(cniTemoin);
		        response.setPrenom(prenomTemoin);
		        response.setNom(nomTemoin);
		        response.setProfession(jobTemoin);
			  return response;
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الشاهد ، المرجوا إعادة المحاولة", "error");
		}
		}
	
	
	
	@PostMapping("ClientProfessionnel/ajouterDossier/insererTemoin")
	@ResponseBody
	public GenericResponse insererTemoin1(
			@RequestParam("numero_dossier1") String numeroDossier,
			 @RequestParam("liste_temoins") String idlisteTemoins 

    ) {
		try {
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الشاهد، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}
			System.out.println(numeroDossier);
			System.out.println(idlisteTemoins);
			DossierH dossier=ajouterService.findDossier(Long.parseLong(numeroDossier)); 
			Personne temoin1 = ajouterService.findbyid(Long.parseLong(idlisteTemoins));
			System.out.println(dossier);
			System.out.println(temoin1);
	        dossier.getPersonnes().add(temoin1);
	        temoin1.getDossiers().add(dossier);
	        
	        String cniTemoin=temoin1.getCin();
	        String prenomTemoin=temoin1.getPrenom();
	        String nomTemoin=temoin1.getNom();
	        String jobTemoin=temoin1.getProfession();
			
	        ajouterService.ajouterPersonne(temoin1); 
	        GenericResponse response = new GenericResponse("تم إضافة الشاهد بنجاح", "success");
		    response.setCin(cniTemoin);
	        response.setPrenom(prenomTemoin);
	        response.setNom(nomTemoin);
	        response.setProfession(jobTemoin);
		  return response;
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الشاهد ، المرجوا إعادة المحاولة", "error");
		}
		
		
	}
	
	@PostMapping("ClientProfessionnel/ajouterDossier/argent")
	@ResponseBody
	public GenericResponse addArgent( @RequestParam(value = "sommeArgent", required = false) String sommeArgent,
			@RequestParam("numero_dossier1") String dossierId ,
			
			// tijari 1
			  
			 @RequestParam(value = "qima_malia1", required = false) String qima_malia1,
			 @RequestParam(value = "surface1" , required = false) String surface1,
			 @RequestParam(value = "addressetijari1", required = false) String addressetijari1,
			   
			   // tijari 2
			  
			 @RequestParam(value = "qima_malia2" , required = false) String qima_malia2,
			 @RequestParam(value = "surface2", required = false) String surface2 ,
			 @RequestParam(value = "addressetijari2", required = false) String addressetijari2 , 
			   
			   // tijari 3
			  
			 @RequestParam(value = "qima_malia3", required = false) String qima_malia3 ,
			 @RequestParam(value = "surface3", required = false) String surface3 ,
			 @RequestParam(value = "addressetijari3", required = false) String addressetijari3,
			 
			 @RequestParam(value = "autre", required = false) String autrePrix,
			 
			// ared 1
			  
			 @RequestParam(value = "qima_malia_ared1", required = false) String qima_malia_ared1,
			 @RequestParam(value = "surface_ared1" , required = false) String surface_ared1,
			 @RequestParam(value = "adresse_ared1", required = false) String adresse_ared1,
			   
			   // ared 2
			  
			 @RequestParam(value = "qima_malia_ared2" , required = false) String qima_malia_ared2,
			 @RequestParam(value = "surface_ared2", required = false) String surface_ared2 ,
			 @RequestParam(value = "adresse_ared2", required = false) String adresse_ared2 , 
			   
			   // ared 3
			  
			 @RequestParam(value = "qima_malia_ared3", required = false) String qima_malia_ared3 ,
			 @RequestParam(value = "surface_ared3", required = false) String surface_ared3 ,
			 @RequestParam(value = "adresse_ared3", required = false) String adresse_ared3,
			 
			 
			// autre 1
			  
			 @RequestParam(value = "qima_autre1", required = false) String qima_autre1,
			 @RequestParam(value = "type1" , required = false) String type1,
						   
			   // autre 2
			  
			 @RequestParam(value = "qima_autre2" , required = false) String qima_autre2,
			 @RequestParam(value = "type2", required = false) String type2 ,
			 			   
			   // autre 3
			  
			 @RequestParam(value = "qima_autre3", required = false) String qima_autre3 ,
			 @RequestParam(value = "type3", required = false) String type3
			 
			 
			
			){
		try {
			if(sommeArgent.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الاملاك، المرجوا إعادة المحاولة , يجب ملء النقود", "error");
			}
			
			System.out.println("controleur");
			    Propriete propriete=new Propriete();
			    ajouterService.ajouterPropriete(propriete);
				
				Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(dossierId),Long.parseLong("1"));
				
				
				
					System.out.println("hi:"+defunt.getRoles());
					System.out.println(defunt.getId());
					defunt.setProprite(propriete);
					propriete.setPersonne(defunt);
					ajouterService.ajouterPersonne(defunt);
				
				
				
				
				Argent argent=new Argent();
				if(!sommeArgent.isEmpty()) {
					argent.setSomme(Double.parseDouble(sommeArgent));
				    argent.setPropriete(propriete);
				    ajouterService.ajouterArgent(argent);
				    propriete.setArgent(argent);
			    }
			    
				Terain terain1= new Terain();
				if(!qima_malia_ared1.isEmpty()) {
					terain1.setPrix(Double.parseDouble(qima_malia_ared1));
					terain1.setAdresse(adresse_ared1);
					if(!surface_ared1.isEmpty())
					terain1.setSurface(Double.parseDouble(surface_ared1));
				    terain1.setPropriete(propriete);
				    ajouterService.ajouterTerain(terain1);
				    propriete.getTerain().add(terain1);
			    }
				
				Terain terain2= new Terain();
				if(!qima_malia_ared2.isEmpty()) {
					terain2.setPrix(Double.parseDouble(qima_malia_ared2));
					terain2.setAdresse(adresse_ared2);
					if(!surface_ared2.isEmpty())
					terain2.setSurface(Double.parseDouble(surface_ared2));
				    terain2.setPropriete(propriete);
				    ajouterService.ajouterTerain(terain2);
				    propriete.getTerain().add(terain2);
			    }
				
				Terain terain3= new Terain();
				if(!qima_malia_ared3.isEmpty()) {
					terain3.setPrix(Double.parseDouble(qima_malia_ared3));
					terain3.setAdresse(adresse_ared3);
					if(!surface_ared3.isEmpty())
					terain3.setSurface(Double.parseDouble(surface_ared3));
				    terain3.setPropriete(propriete);
				    ajouterService.ajouterTerain(terain3);
				    propriete.getTerain().add(terain3);
			    }
				
				
			    
			    ProprieteComerciale propCome1= new ProprieteComerciale();
			    if(!qima_malia1.isEmpty()) {
			    	propCome1.setPrix(Double.parseDouble(qima_malia1));
			    	propCome1.setAdresse(addressetijari1);
			    	if(!surface1.isEmpty())
			    	propCome1.setSurface(Double.parseDouble(surface1));
			    	propCome1.setPropriete(propriete);
			    	ajouterService.ajouterComerciale(propCome1);
			    	propriete.getProprieteComerciales().add(propCome1);
			    }
			    
			    ProprieteComerciale propCome2= new ProprieteComerciale();
			    if(!qima_malia2.isEmpty()) {
			    	propCome2.setPrix(Double.parseDouble(qima_malia2));
			    	propCome2.setAdresse(addressetijari2);
			    	if(!surface2.isEmpty())
			    	propCome2.setSurface(Double.parseDouble(surface2));
			    	propCome2.setPropriete(propriete);
			    	ajouterService.ajouterComerciale(propCome2);
			    	propriete.getProprieteComerciales().add(propCome2);
			    }
			    
			    ProprieteComerciale propCome3= new ProprieteComerciale();
			    if(!qima_malia3.isEmpty()) {
			    	propCome3.setPrix(Double.parseDouble(qima_malia3));
			    	propCome3.setAdresse(addressetijari3);
			    	if(!surface3.isEmpty())
			    	propCome3.setSurface(Double.parseDouble(surface3));
			    	propCome3.setPropriete(propriete);
			    	ajouterService.ajouterComerciale(propCome3);
			    	propriete.getProprieteComerciales().add(propCome3);
			    }
			    
//			    Autre autre=new  Autre();
//			    if(!autrePrix.isEmpty()) {
//			    	autre.setPrix(Double.parseDouble(autrePrix));
//			    	autre.setPropriete(propriete);
//			    	ajouterService.ajouterAutre(autre);
//			    	propriete.getAutres().add(autre);
//			    }
				
			    
			    Autre autre1=new Autre();
			    if(!qima_autre1.isEmpty()) {
			    	autre1.setPrix(Double.parseDouble(qima_autre1));
			    	autre1.setType(type1);
			    	
			    	autre1.setPropriete(propriete);
			    	ajouterService.ajouterAutre(autre1);
			    	propriete.getAutres().add(autre1);
			    }
			    
			    Autre autre2=new Autre();
			    if(!qima_autre2.isEmpty()) {
			    	autre2.setPrix(Double.parseDouble(qima_autre2));
			    	autre2.setType(type2);
			    	
			    	autre2.setPropriete(propriete);
			    	ajouterService.ajouterAutre(autre2);
			    	propriete.getAutres().add(autre2);
			    }
			    
			    Autre autre3=new Autre();
				
				
				  if(!qima_autre3.isEmpty()) { autre3.setPrix(Double.parseDouble(qima_autre3));
				  autre3.setType(type3);
				  
				  autre3.setPropriete(propriete); ajouterService.ajouterAutre(autre3);
				  propriete.getAutres().add(autre3); }
				 
				 
				
			
//			System.out.println(nom_dossier);

			//ajouterService.ajouterPersonne(defunt);
			
			
//			UserDossier userDossierhH = new UserDossier(numero_dossier, Long.parseLong(logged_in_user));
//			ajouterService.ajouterUserDossier(userDossier);
			
			return new GenericResponse("تم إضافة الاملاك بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الاملاك، المرجوا إعادة المحاولة  ", "error");
		}
	}
  
	
	@PostMapping("ClientProfessionnel/ajouterDossier/wasiya")
	@ResponseBody
	public GenericResponse addWasiya(@RequestParam("wasiya") String wasiya,
			@RequestParam("numero_dossier1") String numeroDossier,
			@RequestParam("nom_wasiya") String nom_wasiya,
			@RequestParam("prenom_wasiya") String prenom_wasiya,
			@RequestParam("cin_wasiya") String cin_wasiya
			){
		try {
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الوصية، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}
			if(cin_wasiya.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الوصية، المرجوا إعادة المحاولة , يجب ملء خانة البطاقة الوطنية ", "error");
			}
			DossierH dossier=ajouterService.findDossier(Long.parseLong(numeroDossier)); 
			
			
			
			
			Indeminite indeminite=new Indeminite();
			RelationFamiliale relation=new RelationFamiliale(); 
			Personne personne=new Personne();
			
			personne.setNom(nom_wasiya);
			personne.setPrenom(prenom_wasiya);
			personne.setCin(cin_wasiya);
			
			indeminite.setParts(wasiya);
			
			relation.setNom("وصية");
			
			personne.setIndeminite(indeminite);
			personne.setRelationFamiliale(relation);
			personne.getDossiers().add(dossier);
			
			indeminite.getPersonnes().add(personne);
			relation.getPersonnes().add(personne);
			dossier.getPersonnes().add(personne);
			
			ajouterService.ajouterIndeminite(indeminite);
			ajouterService.ajouterRelation(relation);
            ajouterService.ajouterDossier(dossier);
			
            
            
			ajouterService.ajouterPersonne(personne);
			    

			
			return new GenericResponse("تم إضافة  الوصية بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الوصية، المرجوا إعادة المحاولة", "error");
		}
	}

	
	
	
	
	//Heritiers
	
	
	
	@RequestMapping(value="/ajouterZawja",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public GenericResponse addHeritier(
									  @RequestParam("nom_zawja") String nom,
									  
									 @RequestParam("numero") String numeroDossier,
									  
									  @RequestParam("prenom_zawja") String prenom,
									  
									  @RequestParam("date_naissance") String dateNaissance,
									 
			@RequestParam("part") String part,
			@RequestParam("relation") String relationF			
			){
		try {
			System.out.println("heritir");
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الوريث، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}
			if(dateNaissance.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الوريث المرجوا إعادة المحاولة , يجب ملء حقل تاريخ الازدياد", "error");
			}
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
			
			Personne zawja= new Personne();
			
			//info personne
			zawja.setNom(nom);
			zawja.setPrenom(prenom);
			zawja.setDate_de_naissance(formatter.parse(dateNaissance));
			
			
			
			
			// role
			RoleH role=ajouterService.findByIdRole(Long.parseLong("2"));
			zawja.getRoles().add(role);
			role.getPersonnes().add(zawja);
			
			
			// dossier 
			DossierH dossier=ajouterService.findDossier(Long.parseLong(numeroDossier)); 
			dossier.getPersonnes().add(zawja);
			zawja.getDossiers().add(dossier);
			
			// relation
			RelationFamiliale relation=new RelationFamiliale();
			relation.setNom(relationF);
			relation.getPersonnes().add(zawja);
			
			ajouterService.ajouterRelation(relation);
			
			// indeminite
			
			Indeminite indiminite=new Indeminite();
			indiminite.setParts(part);
			indiminite.getPersonnes().add(zawja);
			
			ajouterService.ajouterIndeminite(indiminite);
			
			zawja.setRelationFamiliale(relation);
			zawja.setIndeminite(indiminite);
		
//		System.out.println(nom_dossier);

		    ajouterService.ajouterPersonne(zawja);
			
			    
			return new GenericResponse("تم إضافة  الوريث  نجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة  الوريث ، المرجوا إعادة المحاولة", "error");
		}
	}
	
	
	@PostMapping("ClientProfessionnel/ajouterDossier/prelevement")
	@ResponseBody
	public GenericResponse addPrelevement(@RequestParam("doyon") String doyon,
			@RequestParam("numero_dossier1") String numeroDossier,
			@RequestParam("tajhez") String tajhez
			
			){
		try {
			if(numeroDossier.isEmpty()) {
				return new GenericResponse(" لم يتم إضافة الاقتطاعات، المرجوا إعادة المحاولة , يجب ملء معلومات  الملف", "error");
			}
			
			Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(numeroDossier),Long.parseLong("1"));
			Prelevement prelevement=new Prelevement();
			
			
			System.out.println("hi:"+defunt.getRoles());
			System.out.println(defunt.getId());
			prelevement.setDette(Double.parseDouble(doyon));
			prelevement.setPreparation_defunt(Double.parseDouble(tajhez));
			prelevement.getPersonnes().add(defunt);
			ajouterService.ajouterPrelevement(prelevement);
			defunt.setPrelevement(prelevement);
			ajouterService.ajouterPersonne(defunt);
			    
	
			
			return new GenericResponse("تم إضافة الاقتطعات بنجاح", "success");
		} catch (Exception e) {
			e.printStackTrace();
			return new GenericResponse("لم يتم إضافة الاقتطعات، المرجوا إعادة المحاولة", "error");
		}
	}
	
	
	
	@RequestMapping(value="/proffessionnel",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public String enregistrermaasala(@RequestParam("nombre") String nombre,@RequestParam("part") String part,@RequestParam("relation_familiale") String relationFamiliale,@RequestParam("cond") String cond  ) {
			//HashMap<String, Object> result = new HashMap<String, Object>();
	  System.err.println("hijoizjcoizjeofjozeijfoz");
	MasaalaPro masaala=new MasaalaPro();
	masaala.setCond(cond);
	masaala.setNombre(nombre);
	masaala.setPart(part);
	masaala.setRelationFamiliale(relationFamiliale);
	mr.save(masaala);
	return "ClientProfessionnel/chosePro";
			
	}
   
	
	@RequestMapping(value="/lookfor",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
	  public java.util.List<String> search(@RequestParam("part") String part,@RequestParam("relation_familiale") String relationFamiliale ) {
		  System.err.println("cvgvqshdvfhgsdfhsdhgfhsdfhgsdgfh");
		 
		  System.err.println(part);
		  System.err.println(relationFamiliale);
		  java.util.List<String> lst=new ArrayList<>();
		  // 1
		 System.err.println(partsRepository.findConditionByRelationFamilialeAndPart("أب", "1/6"));
		 //2
		String a=partsRepository.findConditionByRelationFamilialeAndPart(relationFamiliale,part);
		  System.err.println(partsRepository.findConditionByRelationFamilialeAndPart(relationFamiliale,part));
		  
		  lst.add(a);
		  return lst;
		}
	
	

	@PostMapping("/calcul{id}")
	public String getPage(@PathVariable("id") String idDossier, Model model) {
	    System.out.println(idDossier);
	    model.addAttribute("idDossier", idDossier);
	    return "ClientProfessionnel/chosePro";
	}
	

	  @GetMapping("/calcull{id}")
	  public String getPcPage(@PathVariable("id") String idDossier , Model model) {
	  
	  
	  java.util.List<MasaalaPro> masaala = mr.findAll();

	  java.util.List<SommePro> sommee = sr.findAll();
	  
	  SommePro somme = sommee.get(0);
	 model.addAttribute("somme",somme);
//	 if(somme.getTarika()<=0.0)
//	 return "invalidCalcul";
//	 else {
	  if(masaala.isEmpty())
		  return "daawla";
	  else{
		model.addAttribute("masaala",masaala);
		model.addAttribute("idDossier", idDossier);
			
	        return "ClientProfessionnel/resultatPro";
	        }
//	 }
	  
  }
	  
	  @GetMapping("/pdf{idDossier}")
	  public String generatePdf(@PathVariable("idDossier") String idDossier , Model model) {
	     
		  model.addAttribute("idDossier", idDossier);
		  java.util.List<Personne> temoins=ajouterService.getPersonneByroleIdAndBynumeroDossierl(Long.parseLong(idDossier),Long.parseLong("3"));
		  
		  java.util.List<Personne> heritiers=ajouterService.getPersonneByroleIdAndBynumeroDossierl(Long.parseLong(idDossier),Long.parseLong("2"));
		  
		  Personne defunt=ajouterService.getPersonneByroleIdAndBynumeroDossier(Long.parseLong(idDossier),Long.parseLong("1"));
		  
		  
		  Propriete propriete=ajouterService.findDefuntDePropriete(defunt.getId());
		  Argent argent=propriete.getArgent();
		  java.util.List<Terain> terains=propriete.getTerain();
		  java.util.List<ProprieteComerciale> propComerciale=propriete.getProprieteComerciales();
		  java.util.List<Autre> autres=propriete.getAutres();
		  
		  Prelevement prelevement=defunt.getPrelevement();
		  
		  Personne wasiya = consulterService. getWasiya(Long.parseLong(idDossier),"وصية");
	      return "ClientProfessionnel/pdf"; 
	  }
	  
	    @GetMapping("ClientProfessionnel/findPersonne/{selectedPersonId}")
		@ResponseBody
		public HashMap<String, Object> findDossier(@PathVariable("selectedPersonId") String id) {
	    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			HashMap<String, Object> result = new HashMap<String, Object>();
			
			
			System.out.println(id);
			Personne personne=ajouterService.findbyid(Long.parseLong(id));

	    	
			
			System.out.println(personne.getId());
			String dateExpiration = formatter.format(personne.getDate_expiration_cin());
			String dateNaissance = formatter.format(personne.getDate_de_naissance());
			
			result.put("personne", personne);
			
            System.out.println();
			
			
			
			result.put("daten", dateNaissance);
			result.put("datee", dateExpiration);
			
			return result;
			
			
			  
		}
	  
	  
	  @RequestMapping(value="calculls",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	  @ResponseBody
	public String enregistrerSomme(@RequestParam("wasiya") Double w,
			@RequestParam("doyon") Double d,
			
			@RequestParam("argent") Double argent,
			@RequestParam("tajhez") Double t,
			@RequestParam(value = "tijari1", required = false) Double tijari1,
			@RequestParam(value = "tijari2", required = false) Double tijari2,
			@RequestParam(value = "tijari3", required = false) Double tijari3,
			
			
			@RequestParam(value = "ared1", required = false) Double ared1,
			@RequestParam(value = "ared2", required = false) Double ared2,
			@RequestParam(value = "ared3", required = false) Double ared3,
			
			@RequestParam(value = "autre1", required = false) Double autre1,
			@RequestParam(value = "autre2", required = false) Double autre2,
			@RequestParam(value = "autre3", required = false) Double autre3
			) {
	
		
		System.err.println("savesavesave"+w);
		Double tarika;
		Double s=argent+tijari1+tijari2+tijari3+ared1+ared2+ared2+autre1+autre2+autre3;
		System.out.println(s);
		
		
		
		
		tarika=s-(t+d+w*s);
		System.out.println(tarika);
		
		System.out.println(tarika);
		System.out.println(w);
		  
		SommePro somme=new SommePro();
		somme.setDoyon(d);
		somme.setSomme(s);
		somme.setTajhez(t);
		somme.setTarika(tarika);
		somme.setWasiya(w*s);
		
		sr.save(somme);
	return "ss";

				
			}
	






}
