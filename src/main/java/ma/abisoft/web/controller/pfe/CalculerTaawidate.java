package ma.abisoft.web.controller.pfe;

import java.util.ArrayList;
import java.util.List;

public class CalculerTaawidate {
	
	
	public CalculerTaawidate() {
	}

	public boolean cacluseRa2ssLmalLmo3tamad(double salaireParAnne) {
		if(salaireParAnne == 00) {
			return true;
		}
		return false;
		
	}
	public double ra2ssLmalLmo3tamad(double salaireParAnne) {
		if(cacluseRa2ssLmalLmo3tamad(salaireParAnne)) {
			return salaireParAnne;
		}
		return salaireParAnne;
	}
	public List<Double> calculeRa2ssLmalMo3tamadMethod_1(double salaireParAnne,double salaireParAnneInf,double salaireParAnneSup) {
		double Ra2ssLmalLmo3tamadInf = ra2ssLmalLmo3tamad(salaireParAnneInf);
		double Ra2ssLmalLmo3tamadSup = ra2ssLmalLmo3tamad(salaireParAnneSup);
		List<Double> t = new ArrayList<>();
		t.add(Ra2ssLmalLmo3tamadInf);
		t.add(Ra2ssLmalLmo3tamadSup);
		return t;
	}
	public double calculeRa2ssLmalMo3tamadMethod_2(double salaireParAnne,double salaireParAnneInf,double salaireParAnneSup) {
		double Ra2ssLmalLmo3tamadInf = ra2ssLmalLmo3tamad(salaireParAnneInf);
		double Ra2ssLmalLmo3tamadSup = ra2ssLmalLmo3tamad(salaireParAnneSup);
		if(salaireParAnne > salaireParAnneInf) {
			return Ra2ssLmalLmo3tamadSup;
		}
		return Ra2ssLmalLmo3tamadInf;
	}
	public double calculeRa2ssLmalMo3tamadMethod_3(double salaireParAnne,double salaireParAnneInf,double salaireParAnneSup) {
		double Ra2ssLmalLmo3tamadInf = ra2ssLmalLmo3tamad(salaireParAnneInf);
		double l9imaModafa = 12.34;
		return Ra2ssLmalLmo3tamadInf+l9imaModafa;
	}
	//calcule taawidate mort 
	public double taawidatIjamlya(double nisbatLmoutaham ,double rassLmalMo3tamad) {
		return rassLmalMo3tamad;
	}
	public double taawidat_dawi(String sifa ,double ta3widate) {
		return ta3widate;
	}
	public double taawidat_ma3nawi(String sifa ,double ta3widate) {
		return ta3widate;
	}
}
