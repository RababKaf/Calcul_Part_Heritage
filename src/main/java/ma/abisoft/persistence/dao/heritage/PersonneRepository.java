package ma.abisoft.persistence.dao.heritage;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import antlr.collections.List;
import ma.abisoft.persistence.model.heritage.Personne;


@Repository
public interface PersonneRepository extends JpaRepository<Personne, Long> {
	
	
	@Query("SELECT p FROM Personne p JOIN p.roles r WHERE r.idRole = :roleId")
	Collection<Personne> findByRoleId(@Param("roleId") Long roleId);
	Personne findByid(Long idPersonne); 
    @Override
    java.util.List<Personne> findAll();
    @Query("SELECT p FROM Personne p " +
            "JOIN p.dossiers d " +
            "JOIN p.roles r " +
            "WHERE d.numero = :dossierId " +
            "AND r.idRole = :roleId")
     Personne findByDossierIdAndRoleId(@Param("dossierId") Long dossierId, @Param("roleId") Long roleId);
     
    
    @Query("SELECT p FROM Personne p " +
            "JOIN p.dossiers d " +
            "JOIN p.roles r " +
            "WHERE d.numero = :dossierId " +
            "AND r.idRole = :roleId")
     java.util.List<Personne> findByDossierIdAndRoleIdl(@Param("dossierId") Long dossierId, @Param("roleId") Long roleId);
    
    
    
    
    @Query("SELECT p FROM Personne p JOIN p.dossiers pd JOIN p.relationFamiliale rf " +
    	       "WHERE pd.numero = :numeroDossier AND p.relationFamiliale.nom = :nom")
    	Personne findWasiyaByNom(@Param("numeroDossier") Long numeroDossier, @Param("nom") String nom);
}
