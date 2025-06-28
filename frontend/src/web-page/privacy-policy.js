import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function PrivacyPolicy() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="mb-4">Integritetspolicy</h1>
          <p className="text-muted mb-4">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
          
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 mb-3">1. Introduktion</h2>
              <p>
                Välkommen till Hitta Vikarie. Vi värnar om din integritet och är engagerade i att skydda dina personuppgifter. 
                Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar din information när du använder vår tjänst.
              </p>

              <h2 className="h4 mb-3 mt-4">2. Personuppgiftsansvarig</h2>
              <p>
                <strong>Hitta Vikarie</strong><br />
                E-post: privacy@hitta-vikarie.se<br />
                Adress: [företagsadress]
              </p>

              <h2 className="h4 mb-3 mt-4">3. Vilka personuppgifter samlar vi in?</h2>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="h6">Kontoinformation:</h5>
                  <ul>
                    <li>Namn (för- och efternamn)</li>
                    <li>E-postadress</li>
                    <li>Telefonnummer</li>
                    <li>Lösenord (krypterat)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="h6">Profilinformation:</h5>
                  <ul>
                    <li>Utbildning och kompetenser</li>
                    <li>Arbetslivserfarenhet</li>
                    <li>Tillgänglighet</li>
                    <li>Profilbild (valfritt)</li>
                  </ul>
                </div>
              </div>
              
              <h5 className="h6 mt-3">Teknisk information:</h5>
              <ul>
                <li>IP-adress</li>
                <li>Webbläsartyp och version</li>
                <li>Enhetstyp</li>
                <li>Användningsstatistik</li>
              </ul>

              <h2 className="h4 mb-3 mt-4">4. Rättslig grund för behandling</h2>
              <p>Vi behandlar dina personuppgifter baserat på följande rättsliga grunder:</p>
              <ul>
                <li><strong>Avtal:</strong> För att tillhandahålla våra tjänster enligt användaravtalet</li>
                <li><strong>Samtycke:</strong> När du har gett uttryckligt samtycke</li>
                <li><strong>Berättigat intresse:</strong> För att förbättra våra tjänster och säkerhet</li>
                <li><strong>Rättslig förpliktelse:</strong> När vi är skyldiga enligt lag</li>
              </ul>

              <h2 className="h4 mb-3 mt-4">5. Hur använder vi dina uppgifter?</h2>
              <ul>
                <li>För att skapa och hantera ditt användarkonto</li>
                <li>För att matcha vikarier med lämpliga uppdrag</li>
                <li>För att kommunicera med dig om tjänsten</li>
                <li>För att förbättra och utveckla våra tjänster</li>
                <li>För säkerhet och bedrägeriförebyggande</li>
                <li>För att uppfylla rättsliga förpliktelser</li>
              </ul>

              <h2 className="h4 mb-3 mt-4">6. Delning av uppgifter</h2>
              <p>Vi delar dina personuppgifter endast i följande fall:</p>
              <ul>
                <li>Med företag som söker vikarier (endast relevant profilinformation)</li>
                <li>Med leverantörer av tekniska tjänster (under strikta sekretessavtal)</li>
                <li>När det krävs enligt lag eller myndighetsföreskrift</li>
                <li>Med ditt uttryckliga samtycke</li>
              </ul>

              <h2 className="h4 mb-3 mt-4">7. Cookies och spårningsteknologi</h2>
              <p>Vi använder följande typer av cookies:</p>
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Typ</th>
                      <th>Syfte</th>
                      <th>Varaktighet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nödvändiga</td>
                      <td>Webbplatsens grundfunktioner</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td>Funktionella</td>
                      <td>Komma ihåg dina inställningar</td>
                      <td>1 år</td>
                    </tr>
                    <tr>
                      <td>Prestanda</td>
                      <td>Förbättra webbplatsens prestanda</td>
                      <td>2 år</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="h4 mb-3 mt-4">8. Lagringstid</h2>
              <p>Vi lagrar dina personuppgifter så länge som:</p>
              <ul>
                <li>Ditt konto är aktivt</li>
                <li>Det är nödvändigt för att tillhandahålla våra tjänster</li>
                <li>Det krävs enligt lag (t.ex. bokföringslag)</li>
                <li>För att lösa tvister eller genomdriva avtal</li>
              </ul>
              <p>När du raderar ditt konto tas dina uppgifter bort inom 30 dagar, förutom de som måste behållas enligt lag.</p>

              <h2 className="h4 mb-3 mt-4">9. Dina rättigheter enligt GDPR</h2>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="h6">Du har rätt att:</h5>
                  <ul>
                    <li>Få tillgång till dina uppgifter</li>
                    <li>Rätta felaktiga uppgifter</li>
                    <li>Radera dina uppgifter</li>
                    <li>Begränsa behandlingen</li>
                    <li>Invända mot behandlingen</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="h6">Ytterligare rättigheter:</h5>
                  <ul>
                    <li>Dataportabilitet</li>
                    <li>Återkalla samtycke</li>
                    <li>Anmäla till tillsynsmyndighet</li>
                    <li>Inte bli föremål för automatiserat beslutsfattande</li>
                  </ul>
                </div>
              </div>

              <h2 className="h4 mb-3 mt-4">10. Säkerhet</h2>
              <p>Vi skyddar dina uppgifter genom:</p>
              <ul>
                <li>Kryptering av känslig data</li>
                <li>Säkra servrar och nätverk</li>
                <li>Regelbundna säkerhetsuppdateringar</li>
                <li>Begränsad åtkomst baserad på behov</li>
                <li>Regelbundna säkerhetsgranskningar</li>
              </ul>

              <h2 className="h4 mb-3 mt-4">11. Överföring till tredje land</h2>
              <p>
                Vi strävar efter att hålla dina uppgifter inom EU/EES. Om uppgifter överförs till tredje land 
                säkerställer vi adekvat skyddsnivå genom lämpliga skyddsåtgärder.
              </p>

              <h2 className="h4 mb-3 mt-4">12. Kontakt</h2>
              <p>För frågor om denna integritetspolicy eller för att utöva dina rättigheter:</p>
              <div className="alert alert-primary">
                <strong>E-post:</strong> privacy@hitta-vikarie.se<br />
                <strong>Telefon:</strong> [telefonnummer]<br />
                <strong>Adress:</strong> [postadress]
              </div>

              <h2 className="h4 mb-3 mt-4">13. Ändringar av integritetspolicyn</h2>
              <p>
                Vi kan uppdatera denna policy vid behov. Väsentliga ändringar meddelas via e-post eller 
                genom meddelande på vår webbplats minst 30 dagar innan de träder i kraft.
              </p>

              <div className="alert alert-info mt-4">
                <h5 className="h6">📞 Tillsynsmyndighet</h5>
                <p className="mb-0">
                  Du har rätt att anmäla klagomål till Integritetsskyddsmyndigheten (IMY) om du anser 
                  att vi behandlar dina personuppgifter på ett felaktigt sätt.
                  <br /><strong>Webbplats:</strong> www.imy.se
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 