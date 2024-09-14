import React from 'react';
import styles from './privacy.module.scss';
import ScrollingComponent from '../../globals/scrollComponent';

export default function PrivacyPage(){
    // return(
    //     <div className="home-container">
    //         <h1 className="text-center">Personvern og cookies</h1>
    //         <div className={styles.container}>
    //             <p>Denne personvernerklæringen forteller hvordan vi samler inn og behandler personopplysninger.</p>
    //             <h2 className="mt-5">Hvilken data samler vi inn?</h2>
    //             <p>De eneste personlige dataene vi samler inn om deg er de personlige dataene du valgfritt sender inn til oss 
    //                 via eksempelvis felter i et kontaktskjema på hjemmesiden eller ved å abonnere på nyhetsbrev.</p>
    //                 <br></br>
    //             <p>Vi samler også inn data med analyseverktøyet Google Analytics, men ingen av dataene vi samler inn via 
    //                 dette verktøyet kan personlig identifisere deg eller knyttes til deg. Les mer om dette lengre ned.</p>
    //             <h2 className="mt-5">
    //                 Hvorfor samler vi inn denne dataen?
    //             </h2>
    //             <p>De personlige dataene samler vi inn fra kontaktskjemaet for å behandle forespørselen din på best mulig 
    //                 måte og for å kunne ta kontakt når vi skal gi deg svar. Vi samler kun inn denne dataen hvis vi får samtykke fra deg.</p>
    //             <ScrollingComponent containerName="scroll-container-1">
    //                 <h2 className="mt-5">Hvem deler vi dataen med?</h2>
    //                 <p>Dataen du sender oss via kontaktskjema mottar vi på epost. I tillegg lagres de i en database som administreres av våre 
    //                     webutviklere. Dataene ligger fysisk på serverene til serveradministratorene våre i Norge. Det eneste formålet med denne 
    //                     lagringen er sikkerhetskopi av dine forespørsler i tilfelle eposten ikke når frem.</p>
    //                 <br></br>
    //                 <p>Analytisk data som ikke kan identifisere deg deles med våre webutviklere via Google Analytics for å forbedre våre hjemmesider.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-2">
    //                 <h2 className="mt-5">Hvor lenge beholder vi dataene dine?</h2>
    //                 <p>Hvis du sender oss data via hjemmesiden som vi mottar på epost, blir dette beholdt av oss på ubestemt tid. Dette er for å kunne 
    //                     hjelpe deg bedre og mer effektivt i fremtiden. Denne typen data slettes på forespørsel fra deg.</p>
    //                 <br></br>
    //                 <p>Infoen du sender inn gjennom våre kontaktskjema, lagres i vår database og blir beholdt i opptil 18 måneder. Deretter slettes denne dataen.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-3">
    //                 <h2 className="mt-5">Hvilke rettigheter har du over dine data?</h2>
    //                 <p>Du har alle rettigheter over dine data.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-4">
    //                 <h2 className="mt-5">Trekke tilbake samtykke når som helst.</h2>
    //                 <p>Du har rett til å trekke tilbake samtykke der du tidligere har gitt ditt samtykke til behandling av personopplysninger.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-5">
    //                 <h2 className="mt-5">Få tilgang til din data.</h2>
    //                 <p>Du har rett til å få en kopi av dataene som behandles av oss.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-6">
    //                 <h2 className="mt-5">Bekreft og søk rettelse av data.</h2>
    //                 <p>Du har rett til å bekrefte nøyaktigheten av din data og be om at den skal oppdateres eller korrigeres.</p>
    //             </ScrollingComponent>
    //             <ScrollingComponent containerName="scroll-container-6">
    //                 <h2 className="mt-5">Få din personlige data slettet eller på annen måte fjernet.</h2>
    //                 <p>Du har rett til, under visse omstendigheter, å få slettet din data. Dette inkluderer ikke data vi er 
    //                     forpliktet til å beholde for administrative, juridiske eller sikkerhetsmessige formål.</p>
    //             </ScrollingComponent>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //         </div>
    //     </div>
    //)
          return (
            <div className="home-container">
              <h1 className="text-center">Integritetspolicy och cookies</h1>
              <div className={styles.container}>
                <p>Denna integritetspolicy förklarar hur vi samlar in och behandlar personuppgifter.</p>
          
                <h2 className="mt-5">Vilka data samlar vi in?</h2>
                <p>De enda personuppgifter vi samlar in om dig är de personuppgifter som du frivilligt skickar till oss 
                  via till exempel fält i ett kontaktformulär på hemsidan eller genom att prenumerera på nyhetsbrev.</p>
                <br></br>
                <p>Vi samlar också in data med analysverktyget Google Analytics, men ingen av de data vi samlar in via 
                  detta verktyg kan personligen identifiera dig eller kopplas till dig. Läs mer om detta längre ner.</p>
          
                <h2 className="mt-5">Varför samlar vi in dessa data?</h2>
                <p>De personuppgifter vi samlar in från kontaktformuläret används för att behandla din förfrågan på bästa möjliga 
                  sätt och för att kunna kontakta dig när vi ska ge dig ett svar. Vi samlar endast in dessa data om vi får ditt samtycke.</p>
          
                <ScrollingComponent containerName="scroll-container-1">
                  <h2 className="mt-5">Vem delar vi dina data med?</h2>
                  <p>De data du skickar till oss via kontaktformuläret mottar vi via e-post. De lagras också i en databas som administreras av våra webbutvecklare. 
                    Data lagras fysiskt på våra serveradministratörers servrar i Norge. Syftet med denna lagring är att säkerhetskopiera dina förfrågningar ifall e-posten inte når fram.</p>
                  <br></br>
                  <p>Analytisk data som inte kan identifiera dig delas med våra webbutvecklare via Google Analytics för att förbättra vår hemsida.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-2">
                  <h2 className="mt-5">Hur länge behåller vi dina data?</h2>
                  <p>Om du skickar oss data via hemsidan som vi mottar via e-post, behåller vi denna information på obestämd tid. 
                    Detta för att vi ska kunna hjälpa dig bättre och mer effektivt i framtiden. Denna typ av data raderas på begäran från dig.</p>
                  <br></br>
                  <p>Informationen du skickar via våra kontaktformulär lagras i vår databas och behålls i upp till 18 månader. Därefter raderas dessa data.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-3">
                  <h2 className="mt-5">Vilka rättigheter har du över dina data?</h2>
                  <p>Du har fulla rättigheter över dina data.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-4">
                  <h2 className="mt-5">Återkalla samtycke när som helst.</h2>
                  <p>Du har rätt att när som helst återkalla samtycke där du tidigare gett ditt samtycke till behandling av personuppgifter.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-5">
                  <h2 className="mt-5">Få tillgång till dina data.</h2>
                  <p>Du har rätt att få en kopia av de data som behandlas av oss.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-6">
                  <h2 className="mt-5">Bekräfta och begära rättelse av data.</h2>
                  <p>Du har rätt att bekräfta noggrannheten i dina data och begära att de uppdateras eller korrigeras.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-7">
                  <h2 className="mt-5">Få dina personuppgifter raderade eller borttagna.</h2>
                  <p>Du har rätt att, under vissa omständigheter, få dina data raderade. Detta inkluderar inte data som vi är skyldiga att behålla för administrativa, juridiska eller säkerhetsmässiga ändamål.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-8">
                  <h2 className="mt-5">Vart skickas dina data?</h2>
                  <p>Information som fylls i i kontaktformuläret skickas till oss via e-post. Innan vi mottar e-postinnehållet kontrolleras det av ett system för att bekämpa skräppost. 
                    Detta är en tredje part och data kan skickas utomlands i denna process. Data lagras i vår databas i Norge hos våra serveradministratörer, administrerat av våra webbutvecklare.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-9">
                  <h2 className="mt-5">Analysdata</h2>
                  <p>Vi samlar in data med analysverktyget Google Analytics, men ingen av dessa data kan personligen identifiera dig. 
                    Din IP-adress anonymiseras innan någon data skickas till Google Analytics. De data som samlas in kan inkludera:</p>
                  <ul>
                    <li>Vilken webbläsare du använder</li>
                    <li>Vilken enhet du använder</li>
                    <li>Vilken stad/område du besöker hemsidan från</li>
                    <li>Hur länge du stannar på sidan</li>
                    <li>Vilka sidor du besöker</li>
                  </ul>
                  <p>Analysdata används endast för att analysera allmänna trender på hemsidan och för att göra anpassningar och förbättringar. Dessa data kan inte kopplas till dig och anses inte vara personuppgifter.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-10">
                  <h2 className="mt-5">Inbäddat innehåll från andra webbplatser</h2>
                  <p>Vår hemsida kan innehålla inbäddat innehåll (t.ex. videor, bilder, artiklar, Facebook-widgetar etc.). 
                    Inbäddat innehåll från andra webbplatser beter sig på exakt samma sätt som om du besöker deras webbplats.</p>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-11">
                  <h2 className="mt-5">Cookies och liknande teknologier</h2>
                  <p>Vi använder cookies (kakor) och liknande teknologier (gemensamt kallade "cookies") för att förbättra din upplevelse av våra webbplatser. 
                    Denna cookie-policy förklarar hur vi använder cookies och vilka val du har angående användningen av dem.</p>
                  <h3>Vad är cookies?</h3>
                  <p>Cookies är små textfiler bestående av bokstäver och siffror. Dessa skickas från vår eller våra partners webbservrar och lagras på din enhet. Denna hemsida kan använda olika typer av cookies:</p>
                  <ul>
                    <li>Sessionscookies är tillfälliga cookies som löper ut när du stänger din webbläsare eller app</li>
                    <li>Varaktiga cookies är cookies som stannar tills du raderar dem eller de löper ut</li>
                    <li>Förstapartscookies är cookies som sätts av webbplatsen du besöker</li>
                    <li>Tredjepartscookies är cookies som sätts av en tredjeparts webbplats</li>
                  </ul>
                  <h3>Varför använder vi cookies?</h3>
                  <p>De cookies vi använder förbättrar våra tjänster. Vissa cookies behövs för att funktionerna ska fungera, medan andra gör våra tjänster smidigare för dig. Vi kategoriserar våra cookies så här:</p>
                  <ul>
                    <li>Nödvändiga cookies krävs för att kunna tillhandahålla våra grundläggande tjänster.</li>
                    <li>Optimeringscookies ger analytisk information om hur du använder våra tjänster.</li>
                    <li>Preferenscookies gör det möjligt att spara inställningar som till exempel ditt valda språk.</li>
                  </ul>
                </ScrollingComponent>
          
                <ScrollingComponent containerName="scroll-container-12">
                  <h2 className="mt-5">Pixlar</h2>
                  <p>Under vissa perioder kan vi använda pixlar för konverteringsspårning. Inga personuppgifter samlas in med dessa cookies eller pixlar.</p>
                </ScrollingComponent>

                <ScrollingComponent containerName="scroll-container-13">
        <h2 className="mt-5">Cookies på denna sida</h2>
        <table>
          <thead>
          <tr>
            <th>Namn</th>
            <th>Livslängd</th>
            <th>Beskrivning</th>
        </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>2 år</td>
              <td>Används för att särskilja användare i Google Analytics</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>24 timmar</td>
              <td>Används för att särskilja användare i Google Analytics</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>1 minut</td>
              <td>Används för att begränsa antalet förfrågningar som måste göras till doubleclick.net</td>
            </tr>
          </tbody>
        </table>
      </ScrollingComponent>

      <ScrollingComponent containerName="scroll-container-14">
        <h2 className="mt-5">Hur kan du kontrollera användningen av cookies?</h2>
        <p>Din webbläsare eller enhet erbjuder vanligtvis inställningar angående användningen och omfattningen av cookies. 
           Vänligen se webbläsarens eller enhetens referensdata för att lära dig hur du justerar dina inställningar. 
           Du kan till exempel blockera alla cookies, endast tillåta förstapartscookies, eller ta bort alla cookies när du stänger din webbläsare.</p>
        <br></br>
        <p>Observera att vissa av de tjänster vi erbjuder kan sluta fungera om du blockerar eller tar bort cookies.</p>
      </ScrollingComponent>

      <ScrollingComponent containerName="scroll-container-15">
        <h2 className="mt-5">Kontakta oss</h2>
        <p>All vår kontaktinformation finns på vår kontaktsida.</p>
      </ScrollingComponent>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
            </div>
        </div>
      );
}