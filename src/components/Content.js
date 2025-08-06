import '../styles/Content.scss';
import Button from './Button';

function Content() {
    return (
        <div className="content">
            <h2>Kesätervehdys IKEA Yritysmyynnistä</h2>
            <p>Hej,</p>
            <p>
                Tiesitkö, että IKEA tarjoaa <a href="#">kattavat palvelut</a> myös yrityksille? Tämän lisäksi tarjoamme yrityksellesi 5% alennuksen ensimmäisestä tilauksestasi kun liityt IKEA Business Network -jäseneksi.
            </p>
            <p ><strong>Lunasta 5% etu* näin:</strong></p>
            <ul className='list'>
                <li>Liity veloituksetta IKEA Business Network jäseneksi <a href="#">täältä</a>.</li>
                <li>Lähetä yhteydenottopyyntö, tilaus tai varaa aika sisustussuunnittelupalveluun alla olevasta linkistä</li>
            </ul>
            <div className='button-content'>
            <Button label="Lunasta etu ja siirry tilaamaan" onClick={() => alert('Yhteydenottopyyntö lähetetty!')} />
            </div>
            <p >
                *Etu on lunastettavissa vain tämän sähköpostin kautta ja etu on voimassa etämyynnin palveluissamme (tilauslomake, yritysmyyjän etätapaaminen sekä sisustussuunnittelupalvelu etänä). Edun viimeinen voimassaolopäivä on <strong>16.9.2025.</strong>
            </p>
            <p>
                Huomathan että etua ei voi käyttää palveluiden tai lahjakorttien maksamiseen eikä sitä voi yhdistää muihin tarjouksiin.
            </p>
        </div>
    );
}

export default Content;
