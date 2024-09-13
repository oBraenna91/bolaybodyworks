import React from 'react';
import Image from 'react-bootstrap/Image';
import image1 from '../../images/sara/black2.jpg';
import styles from './terms.module.scss';
import ScrollingComponent from '../../globals/scrollComponent';

export default function TermsPage() {
    return(
        <div className="home-container">
            <h1 className="text-center">Terms & Conditions</h1>
            <div className={styles.imageContainer}>
                <Image className="corner" src={image1} alt="Sara's image" fluid />
            </div>
            <ScrollingComponent containerName="scroll-container-1">
                <div className={styles.container}>
                    <h3 className='my-5'>Innledning</h3>
                    <p>Dette kjøpet er regulert av de nedenstående standard salgsbetingelser for forbrukerkjøp 
                        av varer over Internett. Forbrukerkjøp over internett reguleres hovedsakelig av avtaleloven, 
                        forbrukerkjøpsloven, markedsføringsloven, angrerettloven og ehandelsloven, og disse lovene 
                        gir forbrukeren ufravikelige rettigheter. Lovene er tilgjengelig på www.lovdata.no. Vilkårene 
                        i denne avtalen skal ikke forstås som noen begrensning i de lovbestemte rettighetene, men 
                        oppstiller partenes viktigste rettigheter og plikter for handelen.
                        <br></br>
                        <br></br>
                        Salgsbetingelsene er utarbeidet og anbefalt av Forbrukertilsynet. For en bedre forståelse av disse 
                        salgsbetingelsene, se Forbrukertilsynets veileder her.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-2">
                <div className={styles.container}>
                    <h3 className='my-5'>1.Avtalen</h3>
                    <p>Avtalen består av disse salgsbetingelsene, opplysninger gitt i bestillingsløsningen og eventuelt 
                        særskilt avtalte vilkår. Ved eventuell motstrid mellom opplysningene, går det som særskilt er 
                        avtalt mellom partene foran, så fremt det ikke strider mot ufravikelig lovgivning.
                        <br></br>
                        <br></br>
                        Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som regulerer kjøp av varer mellom 
                        næringsdrivende og forbrukere.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-3">
                <div className={styles.container}>
                    <h3 className='my-5'>2.Partene</h3>
                    <p>Selger er Gymfluence OÜ, Orgnr. 16864978, Paepargi 43, 28, 11417 Tallinn, Estonia, +37255574987, jk@gymfluence.io
                        <br></br>
                        <br></br>
                        og betegnes i det følgende som selger/selgeren.
                        <br></br>
                        <br></br>
                        Kjøper er den forbrukeren som foretar bestillingen, og betegnes i det følgende som kjøper/kjøperen.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-4">
                <div className={styles.container}>
                    <h3 className='my-5'>Pris</h3>
                    <p>Den oppgitte prisen for varen og tjenester er den totale prisen kjøper skal betale. Denne prisen inkluderer 
                        alle avgifter og tilleggskostnader. Ytterligere kostnader som selger før kjøpet ikke har informert om, skal 
                        kjøper ikke bære.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-5">
                <div className={styles.container}>
                    <h3 className='my-5'>Avtaleinngåelse</h3>
                    <p>Avtalen er bindende for begge parter når kjøperen har sendt sin bestilling til selgeren.
                        <br></br>
                        <br></br>
                        Avtalen er likevel ikke bindende hvis det har forekommet skrive- eller tastefeil i tilbudet fra selgeren 
                        i bestillingsløsningen i nettbutikken eller i kjøperens bestilling, og den annen part innså eller burde 
                        ha innsett at det forelå en slik feil.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-6">
                <div className={styles.container}>
                    <h3 className='my-5'>Betalingen</h3>
                    <p>Selgeren kan kreve betaling for varen fra det tidspunkt den blir sendt fra selgeren til kjøperen.
                        <br></br>
                        <br></br>
                        Dersom kjøperen bruker kredittkort eller debetkort ved betaling, kan selgeren reservere kjøpesummen 
                        på kortet ved bestilling. Kortet blir belastet samme dag som varen sendes.
                        <br></br>
                        <br></br>
                        Ved betaling med faktura, blir fakturaen til kjøperen utstedt ved forsendelse av varen. Betalingsfristen 
                        fremgår av fakturaen og er på minimum 14 dager fra mottak.
                        <br></br>
                        <br></br>
                        Kjøpere under 18 år kan ikke betale med etterfølgende faktura.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-6">
                <div className={styles.container}>
                    <h3 className='my-5'>Levering</h3>
                    <p>Levering er skjedd når kjøperen, eller hans representant, har overtatt tingen.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </ScrollingComponent>
        </div>
    )
}