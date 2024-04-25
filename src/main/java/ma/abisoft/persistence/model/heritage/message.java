package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import ma.abisoft.persistence.model.User;

@Entity
public class message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

    @Column(columnDefinition = "mediumtext")
	private String message;	
	@ManyToOne
	@JoinColumn(name = "id_User")
	private User user;
	public Long getId() {
		return id;
	}
	public String getMessage() {
		return message;
	}
	public User getUser() {
		return user;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public void setUser(User user) {
		this.user = user;
	}

}
