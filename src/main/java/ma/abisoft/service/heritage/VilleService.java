package ma.abisoft.service.heritage;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import ma.abisoft.persistence.dao.heritage.VilleRepository;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
@Service
public class VilleService implements InterVille {
VilleRepository vr;
	
	public VilleService(VilleRepository vr) {
	super();
	this.vr = vr;
}

	@Override
	public List<Ville> findByRegion(Region region) {
		// TODO Auto-generated method stub
		return  vr.findByRegion(region);
	}

	public List<Ville> findAllVilles() {
		
		return vr.findAll();
	}


	

}
