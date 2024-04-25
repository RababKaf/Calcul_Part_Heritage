package ma.abisoft.persistence.dao.heritage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Region;
import ma.abisoft.persistence.model.heritage.Ville;

public interface VilleRepository extends JpaRepository<Ville, Long> {
    List<Ville> findByRegion(Region region);

	Ville findByCityName(String name);



}
