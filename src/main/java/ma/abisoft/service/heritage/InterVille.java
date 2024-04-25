package ma.abisoft.service.heritage;

import java.util.Collection;
import java.util.List;

import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;

public interface InterVille {
List<Ville> findByRegion(Region region);
//List<Ville>   getCitiesByRegionId(long regionId);
}
