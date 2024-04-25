package ma.abisoft.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import ma.abisoft.persistence.model.User;

import ma.abisoft.service.heritage.AjouterServiceH;
import ma.abisoft.service.heritage.ConsulterServiceH;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

@Controller
public class ClientController {
	

	
	@Autowired
	AjouterServiceH ajouterService;
	
	@Autowired
	ConsulterServiceH consulterService;
	
	 
	@RequestMapping(value = { "/ClientProfessionnel/index.html", "/ClientProfessionnel/index" })
		public ModelAndView wxAutoLogin(HttpServletRequest request, HttpServletResponse response,Model model) throws Exception {
			ModelAndView ret = new ModelAndView();
			HttpSession session = request.getSession();
			User user =(User)session.getAttribute("user1");
			System.out.println("user="+user.getEmail());
			if(user!=null) {
				ret.addObject("user", user);
			
				model.addAttribute("office",user.getOffice());
			}
			ret.setViewName("/ClientProfessionnel/index");
			
			//infos de page d'accueil
			int nombreDossiers = 0;
			Long dernierDossier = null;
//			int nombreSeancesAujourdhui = 0;
//			int nombreSeancesSemaine = 0;
//			Dossier seancePlusProche = null;
			
			try {
				nombreDossiers = consulterService.getAllDossierByuser(user.getId()).size();
				dernierDossier = ajouterService.getLastDossier(user.getId()).getNumero();
				System.out.println(dernierDossier);
//				nombreSeancesAujourdhui = seancesService.getDaySeances().size();
//				nombreSeancesSemaine = seancesService.getWeekSeances().size();
//				seancePlusProche = seancesService.getNearestSeance();
				
			}catch(Exception e) {
				System.err.println(e.getMessage());
			}
			
			ret.addObject("nombreDossiers", nombreDossiers);
			ret.addObject("dernierDossier", dernierDossier);
//			ret.addObject("nombreSeancesAujourdhui", nombreSeancesAujourdhui);
//			ret.addObject("nombreSeancesSemaine", nombreSeancesSemaine);
//			ret.addObject("seancePlusProche", seancePlusProche);
			System.out.println("nombreDossiers="+nombreDossiers);
			System.out.println("last dossier ="+dernierDossier);
			return ret;

		}
	 
		/*
		 * @RequestMapping(value = "/Admin/index") public ModelAndView
		 * wxAutoLogin1(HttpServletRequest request, HttpServletResponse response) throws
		 * Exception { ModelAndView ret = new ModelAndView(); HttpSession session =
		 * request.getSession(); User user =(User)session.getAttribute("user1");
		 * if(user!=null) { ret.addObject("user", user); }
		 * ret.setViewName("/Admin/index"); return ret;
		 * 
		 * }
		 */
}