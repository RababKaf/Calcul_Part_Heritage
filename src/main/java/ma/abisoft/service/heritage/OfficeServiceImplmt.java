package ma.abisoft.service.heritage;



import java.util.List;

import org.springframework.stereotype.Service;



import ma.abisoft.persistence.dao.heritage.OfficeRepository;
import ma.abisoft.persistence.model.heritage.Office;
import ma.abisoft.persistence.model.heritage.Ville;
@Service
public class OfficeServiceImplmt implements Inter {
private OfficeRepository os;



public OfficeServiceImplmt(OfficeRepository os) {
	super();
	this.os = os;
}



@Override
public Office saveOffice(Office o) {
	// TODO Auto-generated method stub
	return os.save(o);
}



public List<Office> findByVille(Ville v) {
	// TODO Auto-generated method stub
	return os.findByVille(v);
}

}
