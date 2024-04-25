package ma.abisoft.persistence.dao.heritage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.abisoft.persistence.model.heritage.Prelevement;
@Repository
public interface PrelevementRepository extends JpaRepository<Prelevement, Long> {

}
