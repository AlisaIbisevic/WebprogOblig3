package webprog.kinobilletteroblig3;

public class Billett {

        private int id;
        private String film;
        private String navn;
        private String telefon;
        private String epost;
        private int antall;

        public Billett(){}

        public Billett(int id, String navn, String telefon, String epost, int antall) {
                this.id = id;
                this.navn = navn;
                this.telefon = telefon;
                this.epost = epost;
                this.antall = antall;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String getFilm() {
                return film;
        }

        public void setFilm(String film) {
                this.film = film;
        }

        public String getNavn() {
                return navn;
        }

        public void setNavn(String navn) {
                this.navn = navn;
        }

        public String getTelefon() {
                return telefon;
        }

        public void setTelefon(String telefon) {
                this.telefon = telefon;
        }

        public String getEpost() {
                return epost;
        }

        public void setEpost(String epost) {
                this.epost = epost;
        }

        public int getAntall() {
                return antall;
        }

        public void setAntall(int antall) {
                this.antall = antall;
        }
}
