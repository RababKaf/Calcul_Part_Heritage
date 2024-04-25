package ma.abisoft.persistence.dao.heritage;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Ville;

public interface OfficeRepository extends JpaRepository<Office, Long>  {

	

	List<Office> findByVille(Ville v);

	Office findByUser(User user);

}
