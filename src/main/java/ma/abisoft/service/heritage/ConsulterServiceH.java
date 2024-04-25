package ma.abisoft.service.heritage;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import ma.abisoft.persistence.model.heritage.Argent;
import ma.abisoft.persistence.model.heritage.Autre;
import ma.abisoft.persistence.model.heritage.DossierH;
import ma.abisoft.persistence.model.heritage.Personne;
import ma.abisoft.persistence.model.heritage.Prelevement;
import ma.abisoft.persistence.model.heritage.Propriete;
import ma.abisoft.persistence.model.heritage.ProprieteComerciale;
import ma.abisoft.persistence.model.heritage.Terain;



@Service
public class ConsulterServiceH {
	
	@Autowired
	private DossierHRepository dossierRepo;
	
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
	
	public Collection<DossierH> getAllDossierByuser(Long idUser){
		return dossierRepo.findByUserId(idUser);
		
	}
	
	public DossierH getDossierById(Long numeroDossier){
		return dossierRepo.findByNumero(numeroDossier);
	}
	
	public void deletePersonne(Long id) {
		personneRepo.deleteById(id);
	}
	
	public void ajouterDossier(DossierH dossier) {
		dossierRepo.save(dossier);  
	}
	
	public void deleteDossier(Long numeroDossier) {
    	dossierRepo.deleteById(numeroDossier);
    }
	
	public Propriete getPropriete(Long id){
		return propRepo.findByPersonneId(id);
	}
	
	public Personne  getWasiya(Long id , String nom) {
		return personneRepo.findWasiyaByNom(id,nom);
	}
	
	public Optional<Argent> findArgent(Long id) {
		return argentRepo.findById(id);
	}
	
	public Optional<Prelevement> findPrelevement(Long id) {
		return prelevementRepo.findById(id);
	}
	
	public Optional<Autre> findAutre(Long id) {
		return autreRepo.findById(id);
	}
	
	public Optional<Terain> findAred(Long id) {
		return terainRepo.findById(id);
	}
	
	public Optional<ProprieteComerciale> findTijari(Long id) {
		return comercialeRepo.findById(id);
	}
	
	public Optional<Personne> findWasiya(Long id) {
		return personneRepo.findById(id);
	}
	
	public void deleteArgent(Long id ) {
		argentRepo.deleteById(id);
	}
	
	public void deleteTijari(Long id ) {
	comercialeRepo.deleteById(id);
	}
	
	public void deleteTerain(Long id ) {
		terainRepo.deleteById(id);
	}
	
	public void deleteAutre(Long id ) {
		autreRepo.deleteById(id);
	}
	
	public void deletePrelevement(Long id ) {
		prelevementRepo.deleteById(id);
	}
	
    

}
