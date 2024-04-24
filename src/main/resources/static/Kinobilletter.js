function regKunde(){
    console.log("Vi er inne i KjopBilletter")
    const film = document.getElementById('film').value;
    const navn = document.getElementById('navn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;
    const antall = document.getElementById('antall').value;

    const telefonRegex = /^\d{8}$/;
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const filmError = document.getElementById('film-error');
    const navnError = document.getElementById('navn-error');
    const telefonError = document.getElementById('telefon-error');
    const epostError = document.getElementById('epost-error');
    const antallError = document.getElementById('antall-error');

    filmError.textContent = '';
    navnError.textContent = '';
    telefonError.textContent = '';
    epostError.textContent = '';
    antallError.textContent = '';

    let valid = true;

    if (!film) {
        filmError.textContent = 'Vennligst velg en film';
        valid = false;
    } else {
        filmError.textContent = '';
    }

    if (!navn) {
        navnError.textContent = 'Vennligst skriv inn navn';
        valid = false;
    }

    if (!telefon) {
        telefonError.textContent = 'Vennligst skriv inn telefonnummer';
        valid = false;
    } else if (!telefonRegex.test(telefon)) {
        telefonError.textContent = 'Ugyldig telefonnummer';
        valid = false;
    }

    if (!epost) {
        epostError.textContent = 'Vennligst skriv inn e-post';
        valid = false;
    } else if (!epostRegex.test(epost)) {
        epostError.textContent = 'Ugyldig e-post';
        valid = false;
    }

    if (!antall) {
        antallError.textContent = 'Vennligst skriv inn antall billetter';
        valid = false;
    }

    if (valid) {
        const billett = {
            film: film,
            navn: navn,
            telefon: telefon,
            epost: epost,
            antall: antall
        };

        $.post("/bestillinger",billett, function() {
            hentAlle();
        });


        document.getElementById('film').value = '';
        document.getElementById('navn').value = '';
        document.getElementById('telefon').value = '';
        document.getElementById('epost').value = '';
        document.getElementById('antall').value = '';
    }
}

function hentAlle() {
    $.get( "/hentAlle", function (data) {

        var ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Navn</th></th><th>Epost</th><th>Telefonnummer</th></tr>";
        for (const i of data) {
            ut += "<tr><td>" + i.film
                + "</td><td>" + i.antall
                + "</td><td>" + i.navn
                + "</td><td>" + i.epost
                + "</td><td>" + i.telefon
                + "</td></tr>";
        }
        ut += "</table> <button id='btn btn-danger' onclick='slettAlle()'>Slett alle billettene</button>";
        $("#billettListe").html(ut)
    });
}
function slettAlle() {
    $.get("/slettAlle", function () {
        $("#billettListe").html("")
    });
}

const billetter = JSON.parse(localStorage.getItem('billetter')) || [];
billetter.forEach(visBillett);



