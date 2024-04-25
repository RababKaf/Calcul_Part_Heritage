package ma.abisoft.persistence.dao.heritage;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.heritage.Argent;
import java.util.List;
import java.util.Optional;


public interface ArgentRepository extends JpaRepository<Argent, Long> {
	
	//Optional<Argent>  findById(Long id);

}
