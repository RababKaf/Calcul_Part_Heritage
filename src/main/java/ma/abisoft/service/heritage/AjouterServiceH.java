package ma.abisoft.service.heritage;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Optional;

import antlr.collections.List;
import ma.abisoft.persistence.dao.UserRepository;
import ma.abisoft.persistence.dao.heritage.ArgentRepository;
import ma.abisoft.persistence.dao.heritage.DossierHRepository;
import ma.abisoft.persistence.dao.heritage.IndeminiteRepository;
import ma.abisoft.persistence.dao.heritage.PersonneRepository;
import ma.abisoft.persistence.dao.heritage.PrelevementRepository;
import ma.abisoft.persistence.dao.heritage.ProprieteRepository;
import ma.abisoft.persistence.dao.heritage.RelationFamilialeRepository;
import ma.abisoft.persistence.dao.heritage.RolehRepository;
import ma.abisoft.persistence.dao.heritage.TerainRepository;

import ma.abisoft.persistence.dao.heritage.autreRepository;
import ma.abisoft.persistence.dao.heritage.proprieteComircialeRepository;
import ma.abisoft.persistence.model.User;
import ma.abisoft.persistence.model.heritage.Argent;
import ma.abisoft.persistence.model.heritage.Autre;
import ma.abisoft.persistence.model.heritage.DossierH;
import ma.abisoft.persistence.model.heritage.Indeminite;
import ma.abisoft.persistence.model.heritage.Personne;
import ma.abisoft.persistence.model.heritage.Prelevement;
import ma.abisoft.persistence.model.heritage.Propriete;
import ma.abisoft.persistence.model.heritage.ProprieteComerciale;
import ma.abisoft.persistence.model.heritage.RelationFamiliale;
import ma.abisoft.persistence.model.heritage.RoleH;
import ma.abisoft.persistence.model.heritage.Terain;



@Service
public class AjouterServiceH {
	
	@Autowired
	private DossierHRepository dossierRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private TerainRepository terainRepo;
	
	@Autowired
	private RelationFamilialeRepository relationRepo;
	
	@Autowired
	private IndeminiteRepository indeminiteRepo;
	
	@Autowired
	private PrelevementRepository prelevementRepo;
	
	@Autowired
	private RolehRepository roleRepo;
	
	@Autowired
	private PersonneRepository personneRepo;
	
	
	
	@Autowired
	private ProprieteRepository propRepo;
	
	@Autowired
	private ArgentRepository argentRepo;
	
	@Autowired
	private proprieteComircialeRepository comercialeRepo;
	
	@Autowired
	private autreRepository autreRepo;
	
	public void ajouterDossier(DossierH dossier) {
		dossierRepo.save(dossier);  
	}
	
	public User findUser(Long id) {
		return userRepo.findByIdOrNull(id);  
	}
	
	public void ajouterTerain(Terain terain) {
		terainRepo.save(terain);  
	}
	
	public void ajouterUser(User user) {
		userRepo.save(user);  
	}
	
	public void ajouterRelation(RelationFamiliale relation) {
		relationRepo.save(relation);  
	}
	
	public void ajouterIndeminite(Indeminite indeminite) {
		indeminiteRepo.save(indeminite);  
	}
	
	public void ajouterPrelevement(Prelevement prelevement) {
		prelevementRepo.save(prelevement);  
	}
	
	public void ajouterAutre(Autre autre) {
		autreRepo.save(autre);
	}
	
	public void ajouterComerciale(ProprieteComerciale propComi) {
		comercialeRepo.save(propComi);
	}
	
	public Personne getPersonneByroleIdAndBynumeroDossier(Long numero,Long idRole){
		return personneRepo.findByDossierIdAndRoleId(numero,idRole);
	}
	
	public java.util.List<Personne> getPersonneByroleIdAndBynumeroDossierl(Long numero,Long idRole){
		return personneRepo.findByDossierIdAndRoleIdl(numero,idRole);
	}
	
	
	
	public void ajouterPersonne(Personne personne) {
		personneRepo.save(personne);
	}
	public void ajouterArgent(Argent argent) {
		argentRepo.save(argent);
	}
	public void ajouterPropriete(Propriete propriete) {
		propRepo.save(propriete);
	}
	
	
	public RoleH findByIdRole(Long id) {
		return roleRepo.findByIdRole(id);
	} 
	
	public Collection<Personne> getPersonnesByRoleId(Long idRole) {
		return personneRepo.findByRoleId(idRole);
	}
	public java.util.List<Personne> getPersonnes(){
		return personneRepo.findAll();
	}
	
	public Personne findbyid(Long id) {
		return personneRepo.findByid(id);
	}
	
	public Propriete findDefuntDePropriete(Long id) {
		return propRepo.findByPersonneId(id);
	}
	
	public DossierH findDossier(Long id) {
		return dossierRepo.findByNumero(id);
	}
	
	public DossierH getLastDossier(Long id ) {
    	return dossierRepo.findByUserIdOrderByDateCreation(id);
    }
	
	


}
