package ma.abisoft.persistence.dao;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Office;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
   List<User> findByEnabled(boolean b);
    @Override
    void delete(User user);
	User findByOffice(Office office);
	User findByLastName(String firstName);
	
   List<User> findByLastNameContaining(String searchTerm);
   default User findByIdOrNull(Long id) {
       return findById(id).orElse(null);
   }

   @Query("SELECT u FROM User u JOIN u.roles r WHERE r.id =5 and enabled=1")
	List<User> userbyRole();

}
