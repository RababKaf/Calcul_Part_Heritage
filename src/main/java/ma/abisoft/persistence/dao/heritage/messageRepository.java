package ma.abisoft.persistence.dao.heritage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.message;

public interface messageRepository extends JpaRepository<message, Long>  {
	List<message> findByUser(User u);

}
