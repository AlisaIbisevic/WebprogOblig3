package webprog.kinobilletteroblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/bestillinger")
    public void leggTilBestilling(Billett lagreBillett) {
        rep.nyBillett(lagreBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlleBestillinger() {
        return rep.hentAlle();
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlle();
    }
}


