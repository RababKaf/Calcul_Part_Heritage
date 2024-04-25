package ma.abisoft.persistence.dao.heritage;


import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.heritage.Region;

public interface RegionRepository extends JpaRepository<Region, Long> {

	Region findByNameRegion(String name);


}
