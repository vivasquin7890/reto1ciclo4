
package Ret1_cic4.reto1.interfaz;

import Ret1_cic4.reto1.modelo.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author wilso
 */
public interface UserCrudRepository extends CrudRepository<User,Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
    
}
