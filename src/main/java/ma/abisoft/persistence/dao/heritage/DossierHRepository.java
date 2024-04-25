package ma.abisoft.persistence.dao.heritage;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.google.common.base.Optional;

import ma.abisoft.persistence.model.heritage.DossierH;


public interface DossierHRepository extends JpaRepository<DossierH, Long> {

	
	DossierH findByNumero(Long id); 
	
	
	@Query("SELECT d FROM DossierH d JOIN d.user u WHERE u.id = :userId")
	Collection<DossierH> findByUserId(@Param("userId") Long userId);
	
	@Query("select d from DossierH d join d.user u where u.id = :userId order by d.dateCreation")
	DossierH findByUserIdOrderByDateCreation(@Param("userId") Long userId);

}
