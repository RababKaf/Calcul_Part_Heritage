package ma.abisoft.service.heritage;

import java.util.List;

import org.springframework.stereotype.Service;



import ma.abisoft.persistence.dao.heritage.RegionRepository;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;
@Service
public class regionService implements InterRegion {
	RegionRepository rr;

	public regionService(RegionRepository rr) {
		super();
		this.rr = rr;
	}
	@Override
	public Region saveRegion(Region r) {
		return rr.save(r);
		
	}
	@Override
	public List<Region> findAllRegions() {
		// TODO Auto-generated method stub
		
		return rr.findAll();
	}
	@Override
	public Region findById(long regionId) {
		// TODO Auto-generated method stub
		return rr.findById(regionId).get();
	}
	
	

}
