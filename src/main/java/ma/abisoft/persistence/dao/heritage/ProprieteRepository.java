package ma.abisoft.persistence.dao.heritage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ma.abisoft.persistence.model.heritage.Propriete;

@Repository
public interface ProprieteRepository extends JpaRepository<Propriete, Long> {
	
	@Query("SELECT p FROM Propriete p JOIN p.personne pr WHERE pr.id = :personneId")
	Propriete findByPersonneId(@Param("personneId") Long personneId);

	

}
