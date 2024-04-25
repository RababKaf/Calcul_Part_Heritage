package ma.abisoft.service.heritage;



import java.util.List;



import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;

public interface InterRegion{
	public Region saveRegion(Region r);
	public List<Region> findAllRegions();
public Region findById(long regionId);
}