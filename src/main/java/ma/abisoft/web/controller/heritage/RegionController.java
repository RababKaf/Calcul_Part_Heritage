
package ma.abisoft.web.controller.heritage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.swing.JOptionPane;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.service.heritage.VilleService;
import ma.abisoft.service.heritage.regionService;

@Controller
public class RegionController {
	
	private regionService rs;
private VilleService vs;


	
	  public RegionController(regionService rs, VilleService vs ) {
		super();
		this.rs = rs;
		this.vs=vs;
	
	}


	@GetMapping("/registration.html")
	   String yourPage(Model model) {
	   List<Region> region = rs.findAllRegions();
	System.err.println("hiiiiiiii");
       model.addAttribute("region", region);
		List<Ville> cities= vs.findAllVilles();
		model.addAttribute("cities",cities);
       

	        return "registration";
	        
	    }
	
	@GetMapping("/registration/Charge/{regionId}")

	 ResponseEntity<List<Ville>> getCitiesByRegionId(@PathVariable("regionId") Long regionId) {
	    HashMap<String, Object> response = new HashMap<>();

	    Region region = rs.findById(regionId); 
	    List<Ville> cities = vs.findByRegion(region);
	    System.err.println(cities.size());

	    response.put("cities", cities);

	    return new ResponseEntity<>(cities, HttpStatus.OK);
	}
}

//    @GetMapping(value ="/cities")
//    @ResponseBody
//    public List<Ville> getCitiesByRegionId(@PathVariable("regionId") Long regionId) {
//       for(int i=0;i<10;i++)
//	    	System.err.println("**********************************");
//    	   
//    	   Region region = rs.findById(regionId); 
//        List<Ville> cities =vs.findByRegion(region);
//        for(int i=0;i<cities.size();i++)
//        	System.err.println("------------------"+cities.get(i));
//
//        return cities;}}





//	  @GetMapping("/get-cities")
//	    @ResponseBody
//	    public List<Ville> getCities(@RequestParam("regionId") Long regionId) {
//	        Region region = rs.findById(regionId);
//	        if (region != null) {
//	            return vs.findByRegion(region);
//	        }
//	        return new ArrayList<>();
//	    }
//	  
//	   @PostMapping("/registration.html")
//	    public String processForm(@ModelAttribute("selectedRegion") Region selectedRegion, Model model) {
//	        Region region = rs.findById(selectedRegion.getId());
//	        List<Ville> cities = (region != null) ? vs.findByRegion(region) : new ArrayList<>();
//	        model.addAttribute("cities", cities);
//	        return "/registration";
//	    }
	

	
	
