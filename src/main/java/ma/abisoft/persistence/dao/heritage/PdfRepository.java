package ma.abisoft.persistence.dao.heritage;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.abisoft.persistence.model.heritage.Pdf;

public interface PdfRepository extends JpaRepository<Pdf, Long> {

}
