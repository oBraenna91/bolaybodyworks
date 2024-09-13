import React from 'react';
import styles from './privacy.module.scss';
import ScrollingComponent from '../../globals/scrollComponent';

export default function PrivacyPage(){
    return(
        <div className="home-container">
            <h1 className="text-center">Personvern og cookies</h1>
            <div className={styles.container}>
                <p>Denne personvernerklæringen forteller hvordan vi samler inn og behandler personopplysninger.</p>
                <h2 className="mt-5">Hvilken data samler vi inn?</h2>
                <p>De eneste personlige dataene vi samler inn om deg er de personlige dataene du valgfritt sender inn til oss 
                    via eksempelvis felter i et kontaktskjema på hjemmesiden eller ved å abonnere på nyhetsbrev.</p>
                    <br></br>
                <p>Vi samler også inn data med analyseverktøyet Google Analytics, men ingen av dataene vi samler inn via 
                    dette verktøyet kan personlig identifisere deg eller knyttes til deg. Les mer om dette lengre ned.</p>
                <h2 className="mt-5">
                    Hvorfor samler vi inn denne dataen?
                </h2>
                <p>De personlige dataene samler vi inn fra kontaktskjemaet for å behandle forespørselen din på best mulig 
                    måte og for å kunne ta kontakt når vi skal gi deg svar. Vi samler kun inn denne dataen hvis vi får samtykke fra deg.</p>
                <ScrollingComponent containerName="scroll-container-1">
                    <h2 className="mt-5">Hvem deler vi dataen med?</h2>
                    <p>Dataen du sender oss via kontaktskjema mottar vi på epost. I tillegg lagres de i en database som administreres av våre 
                        webutviklere. Dataene ligger fysisk på serverene til serveradministratorene våre i Norge. Det eneste formålet med denne 
                        lagringen er sikkerhetskopi av dine forespørsler i tilfelle eposten ikke når frem.</p>
                    <br></br>
                    <p>Analytisk data som ikke kan identifisere deg deles med våre webutviklere via Google Analytics for å forbedre våre hjemmesider.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-2">
                    <h2 className="mt-5">Hvor lenge beholder vi dataene dine?</h2>
                    <p>Hvis du sender oss data via hjemmesiden som vi mottar på epost, blir dette beholdt av oss på ubestemt tid. Dette er for å kunne 
                        hjelpe deg bedre og mer effektivt i fremtiden. Denne typen data slettes på forespørsel fra deg.</p>
                    <br></br>
                    <p>Infoen du sender inn gjennom våre kontaktskjema, lagres i vår database og blir beholdt i opptil 18 måneder. Deretter slettes denne dataen.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-3">
                    <h2 className="mt-5">Hvilke rettigheter har du over dine data?</h2>
                    <p>Du har alle rettigheter over dine data.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-4">
                    <h2 className="mt-5">Trekke tilbake samtykke når som helst.</h2>
                    <p>Du har rett til å trekke tilbake samtykke der du tidligere har gitt ditt samtykke til behandling av personopplysninger.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-5">
                    <h2 className="mt-5">Få tilgang til din data.</h2>
                    <p>Du har rett til å få en kopi av dataene som behandles av oss.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-6">
                    <h2 className="mt-5">Bekreft og søk rettelse av data.</h2>
                    <p>Du har rett til å bekrefte nøyaktigheten av din data og be om at den skal oppdateres eller korrigeres.</p>
                </ScrollingComponent>
                <ScrollingComponent containerName="scroll-container-6">
                    <h2 className="mt-5">Få din personlige data slettet eller på annen måte fjernet.</h2>
                    <p>Du har rett til, under visse omstendigheter, å få slettet din data. Dette inkluderer ikke data vi er 
                        forpliktet til å beholde for administrative, juridiske eller sikkerhetsmessige formål.</p>
                </ScrollingComponent>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}