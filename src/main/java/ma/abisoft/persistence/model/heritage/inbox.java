package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class inbox {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String userName;
    @Column(columnDefinition = "mediumtext")
	private String  message;
	public Long getId() {
		return id;
	}
	public String getUserName() {
		return userName;
	}
	public String getMessage() {
		return message;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setMessage(String message) {
		this.message = message;
	}
    

}
