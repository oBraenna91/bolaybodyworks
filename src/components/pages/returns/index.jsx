import React from 'react';
import styles from './returns.module.scss';
import Image from 'react-bootstrap/Image';
import image1 from '../../images/sara/B&W1.jpg';
import ScrollingComponent from '../../globals/scrollComponent';

export default function ReturnPage() {
    return(
        <div className={`home-container`}>
            <h1 className="text-center">Retur</h1>
            <div className={`appearing-container ${styles.imageContainer}`}>
                <Image className="corner" src={image1} fluid alt="image of Sara"/>
            </div>
            <div className={styles.returnContainer}>
            <ScrollingComponent containerName="scroll-container-1">
                <h3>Opplysninger om angre- og returrett</h3>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-2">
                <p>Du har rett til å gå fra denne avtalen innen 14 dager uten å oppgi noen grunn for dette. 
                    Angrefristen utløper 14 dager etter den dag du eller en annen tredjemann enn transportøren, 
                    som du har utpekt, får varene i fysisk besittelse.</p>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-3">
                <p>For å kunne bruke angreretten må du underrette oss:
                    <br></br>
                    <br></br>
                    Gymfluence OÜ <br></br>
                    Paepargi 43, 28, 11417 Tallinn, Estonia <br></br>
                    +37255574987 <br></br>
                    jk@gymfluence.io
                    <br></br>
                    <br></br>
                    på en utvetydig måte om din beslutning om å gå fra avtalen (f.eks. i et brev sendt med post eller e-post).</p>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-4">
                <p>For å overholde angrefristen er det tilstrekkelig at du sender meldingen om at du vil bruke angreretten før angrefristen utløper.<br></br>
                    <br></br>
                    Du må selv bære de direkte kostnadene ved å returnere varene.<br></br>
                    <br></br>
                    Virkningene av at angreretten brukes.<br></br>
                    <br></br>
                    Dersom du går fra denne avtalen, skal vi tilbakebetale alle betalinger vi har mottatt fra deg med unntak av leveringskostnadene, uten unødig opphold og i alle tilfeller senest 14 dager etter den dag vi mottar melding om din beslutning om å gå fra denne avtalen.<br></br>
                    <br></br>
                    </p>
            </ScrollingComponent>
            <ScrollingComponent containerName="scrolling-container-5">
                <p>
                Vi foretar tilbakebetalingen med samme betalingsmiddel som du benyttet ved den opprinnelige transaksjonen, med mindre du uttrykkelig har avtalt noe annet med oss. Frakt vil bli trukket fra refusjonsbeløpet.<br></br>
                    <br></br>
                    I alle tilfeller vil du ikke bli pålagt noe gebyr som følge av tilbakebetalingen.<br></br>
                    <br></br>
                    Du er ansvarlig bare for en eventuell reduksjon i varenes verdi som skyldes en annen håndtering av varene enn den som er nødvendig for å fastslå deres art, egenskaper og funksjon.<br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </p>
            </ScrollingComponent>
        </div>
    </div>
    )
}