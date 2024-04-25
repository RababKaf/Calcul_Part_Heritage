



package ma.abisoft.web.controller.heritage;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.OfficeRepository;
import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.service.heritage.OfficeServiceImplmt;
import ma.abisoft.service.heritage.VilleService;
import ma.abisoft.service.heritage.regionService;

@Controller
public class OfficeController {
	@Autowired
	regionService rs;
	@Autowired
	VilleService vs;
	@Autowired
OfficeRepository or;
	
	@Autowired
	VilleRepository vr;
	@Autowired
	OfficeServiceImplmt os;
	
	@Autowired
UserRepository ur;
	

	@GetMapping("/IBureau")
	public String createOfficeForm(Model model) {
		List<Region> region = rs.findAllRegions();
	
		System.err.println("hiiiiiiii");
		model.addAttribute("region", region);
		List<Ville> cities= vs.findAllVilles();
		model.addAttribute("cities",cities);

		return "iBureau";
	}

	@RequestMapping(value="/IBureau/Charge/{regionId}",method=RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
public  List<String>  getCitiesByRegionId(@PathVariable("regionId") Long regionId) {
		//HashMap<String, Object> result = new HashMap<String, Object>();
	   
		Region region = rs.findById(regionId); 
       List<Ville> cities =vs.findByRegion(region);
       List<String> cities1=new ArrayList<>();
       
       
       for(int i=0;i<cities.size();i++)
    	   cities1.add(cities.get(i).getCityName()+"_"+cities.get(i).getId());
//      System.err.println(cities.get(i).getCityName());
//     result.put("cities", cities);
//		return result;
       return cities1;
	}

 
	
    
    @GetMapping("/displayy")
    public ResponseEntity<byte[]> displayImageOffice(@RequestParam("id") long id) throws IOException, SQLException
    {System.err.println("bdfjhksjhgkjherkjghkejrhgkjehrjghe");
      User image = ur.getById(id);
        byte [] imageBytes = null;
        imageBytes = image.getImage().getBytes(1,(int) image.getImage().length());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
     
    
    }
    
    @GetMapping("/display")
    public ResponseEntity<byte[]> displayImageUser(@RequestParam("id") long id) throws IOException, SQLException
    {System.err.println("bdfjhksjhgkjherkjghkejrhgkjehrjghe");
        Office image = or.getById(id);
        byte [] imageBytes = null;
        imageBytes = image.getImage().getBytes(1,(int) image.getImage().length());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    } 
	

}
