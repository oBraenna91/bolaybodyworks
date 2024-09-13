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
                    <h3 className='my-5'>Inledning</h3>
                    <p>Detta köp regleras av nedanstående standardvillkor för konsumentköp av varor över Internet. 
                        Konsumentköp över internet regleras huvudsakligen av avtalslagen, konsumentköplagen, 
                        marknadsföringslagen, ångerrättslagen och e-handelslagen, och dessa lagar ger konsumenten 
                        tvingande rättigheter. Lagarna finns tillgängliga på www.lagboken.se. Villkoren i detta avtal 
                        ska inte tolkas som en begränsning av de lagstadgade rättigheterna, utan fastställer parternas 
                        viktigaste rättigheter och skyldigheter för handeln.
                        <br></br>
                        <br></br>
                        Försäljningsvillkoren har tagits fram och rekommenderats av Konsumentverket. För en bättre 
                        förståelse av dessa försäljningsvillkor, se Konsumentverkets vägledning här.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-2">
                <div className={styles.container}>
                    <h3 className='my-5'>1.Avtalet</h3>
                    <p>Avtalet består av dessa försäljningsvillkor, upplysningar som ges i beställningslösningen och 
                        eventuella särskilt avtalade villkor. Vid eventuell motsättning mellan upplysningarna gäller 
                        det som särskilt avtalats mellan parterna, så länge det inte strider mot tvingande lagstiftning.
                        <br></br>
                        <br></br>
                        Avtalet kompletteras vidare av relevanta lagbestämmelser som reglerar köp av varor mellan 
                        näringsidkare och konsumenter.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-3">
                <div className={styles.container}>
                    <h3 className='my-5'>2.Parterna</h3>
                    <p>Seljäre är Gymfluence OÜ, Orgnr. 16864978, Paepargi 43, 28, 11417 Tallinn, Estonia, +37255574987, jk@gymfluence.io
                        <br></br>
                        <br></br>
                        och kallas i det följande för säljare/säljaren.
                        <br></br>
                        <br></br>
                        Köpare är den konsument som gör beställningen, och kallas i det följande för köpare/köparen.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-4">
                <div className={styles.container}>
                    <h3 className='my-5'>Pris</h3>
                    <p>Det angivna priset för varan och tjänsterna är det totala pris som köparen ska betala. Detta pris 
                        inkluderar alla avgifter och tilläggskostnader. Ytterligare kostnader som säljaren inte informerat 
                        om före köpet ska köparen inte behöva stå för.</p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-5">
                <div className={styles.container}>
                    <h3 className='my-5'>Avtalsingående</h3>
                    <p>Avtalet är bindande för båda parter när köparen har skickat sin beställning till säljaren.
                        <br></br>
                        <br></br>
                        Avtalet är dock inte bindande om det förekommit skriv- eller tryckfel i erbjudandet från 
                        säljaren i beställningslösningen i webbutiken eller i köparens beställning, och den andra 
                        parten insåg eller borde ha insett att det förelåg ett sådant fel.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-6">
                <div className={styles.container}>
                    <h3 className='my-5'>Betalning</h3>
                    <p>Säljaren kan kräva betalning för varan från den tidpunkt den skickas från säljaren till köparen.
                        <br></br>
                        <br></br>
                        Om köparen använder kreditkort eller betalkort vid betalning, kan säljaren reservera köpesumman 
                        på kortet vid beställning. Kortet debiteras samma dag som varan skickas.
                        <br></br>
                        <br></br>
                        Vid betalning med faktura utfärdas fakturan till köparen vid leverans av varan. Betalningsfristen 
                        framgår av fakturan och är minst 14 dagar från mottagandet.
                        <br></br>
                        <br></br>
                        Köpare under 18 år kan inte betala med efterföljande faktura.
                    </p>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-7">
                <div className={styles.container}>
                    <h3 className='my-5'>Leverans</h3>
                    <p>Leverans sker när köparen, eller dennes representant, har mottagit varan.
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