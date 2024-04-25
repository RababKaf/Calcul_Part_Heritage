package ma.abisoft.persistence.dao.heritage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.abisoft.persistence.model.heritage.RoleH;

@Repository
public interface RolehRepository extends JpaRepository<RoleH ,Long> {
	RoleH findByIdRole(Long id); 

}
