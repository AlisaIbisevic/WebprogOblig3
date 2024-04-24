package webprog.kinobilletteroblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void nyBillett(Billett innBillett){
        String sql ="INSERT into Billett (film,antall,navn,telefon,epost) VALUES(?,?,?,?,?);";
        db.update(sql,innBillett.getFilm(),innBillett.getAntall(),innBillett.getNavn(),
                innBillett.getTelefon(),innBillett.getEpost());
    }

    public List<Billett> hentAlle() {
        String sql = "SELECT * FROM Billett;";
        return db.query(sql, new BeanPropertyRowMapper(Billett.class));
    }

    public void slettAlle() {
        String sql = "DELETE FROM Billett;";
        db.update(sql);
    }
}
