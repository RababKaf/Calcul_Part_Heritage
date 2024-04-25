package ma.abisoft.persistence.model.heritage;

import java.util.List;

public class DossierData {
	
	
	 private DossierH dossier;
	    private List<Personne> personnes;

	    public DossierData(DossierH dossier, List<Personne> personnes) {
	        this.dossier = dossier;
	        this.personnes = personnes;
	    }

	    public DossierH getDossier() {
	        return dossier;
	    }

	    public List<Personne> getPersonnes() {
	        return personnes;
	    }

}
