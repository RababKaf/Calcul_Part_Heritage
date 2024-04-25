package ma.abisoft.persistence.dao.heritage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ma.abisoft.persistence.model.heritage.Argent;

public interface PartsRepository extends JpaRepository<Argent, Long>  {
    @Query("SELECT p.cond FROM Parts p WHERE p.relationFamiliale = :relationFamiliale AND p.part = :part")
    String findConditionByRelationFamilialeAndPart(@Param("relationFamiliale") String relationFamiliale, @Param("part") String part);

}

