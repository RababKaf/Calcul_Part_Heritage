package ma.abisoft.spring;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@PropertySource({ "classpath:persistence.properties" })
@ComponentScan({ "ma.abisoft.persistence" })
@EnableJpaRepositories(basePackages = "ma.abisoft.persistence.dao")
public class PersistenceJPAConfig {
	
	
}
