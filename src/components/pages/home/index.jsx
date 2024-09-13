import React from 'react';
import Intro from '../../intro';
import ScrollingComponent from '../../globals/scrollComponent';
import ImageCollage from '../../imageCollage';
import Accordion from '../../globals/accordion';
import lotus from '../../icons/lotus.png';
import meals from '../../icons/meals.png';
import slim from '../../icons/slim.png';
import weights from '../../icons/weights.png';
import styles from './home.module.scss';
import Image from 'react-bootstrap/Image';
import arrow from '../../icons/arrow1.png';
import img1 from '../../images/sara/peachy.jpg';

export default function Home() {
    return(
        <div className="home-container">
            <h1>Välkommen til Bolay Bodyworks</h1>
            <Intro />
            <div className="appearing-container">
                <ImageCollage />
            </div>
            <ScrollingComponent containerName="scroll-container-1">
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceContainerImageContainer}>
                        <Image fluid alt="arrox-icon" src={arrow} />
                    </div>
                    <div className={styles.subHeader}>S E R V I C E S</div>
                </div>
                <Accordion 
                    title="Personlig treningsplan"
                    content="Få en tilpasset treningsplan som passer dine behov, uansett om du 
                    er nybegynner eller erfaren. Øvelsene vil hjelpe deg med å bygge styrke, 
                    øke kondisjonen og holde motivasjonen oppe gjennom hele utfordringen."
                    icon={weights}
                />
                <Accordion 
                    title="Matplan"
                    content="Med over 200 deilige måltider tilpasset dine preferanser og mål,
                    blir det enkelt å holde seg på sporet. Bytt ut måltider etter eget ønske, 
                    og nyt sunne, balanserte retter som holder deg mett og energisk."
                    icon={meals}
                />
                <Accordion 
                    title="Gå ned i vekt"
                    content="Din vei til en sunn vekt.  
                    Fokus på balanse mellom kosthold og trening vil hjelpe deg å nå dine 
                    vektmål på en trygg og effektiv måte. Ingen strenge dietter – bare et godt 
                    strukturert program som får deg til å føle deg vel."
                    icon={slim}
                />
                <Accordion 
                    title="Velvære for kropp og sjel"
                    content="Velvære handler ikke bare om hvordan du ser ut, men også om 
                    hvordan du har det med deg selv. Gjennom mindfulness, e-bøker, og 
                    live-sessions, vil du lære å slappe av, finne ro, og ta vare på deg 
                    selv på veien til målene dine."
                    icon={lotus}
                />
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-2">
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceContainerImageContainer}>
                        <Image fluid alt="arrox-icon" src={arrow} />
                    </div>
                    <div className={styles.subHeader}>W O R K S</div>
                </div>
                <div className={styles.elaborate}>
                    <div className={`${styles.card} corner`}>
                        <Image src={img1} className="corner" fluid alt="Image of Sara" />
                    </div>
                    <div className={styles.elaborateH}>
                        Finn din indre styrke
                    </div>
                    <div className={styles.elaborateP}>
                        Hver treningsplan er designet for å utfordre deg på
                        ditt nivå, samtidig som du bygger opp styrke, utholdenhet, 
                        og selvtillit. Fra hjemmeøkter til treningssenter – du vil 
                        ha alt du trenger for å lykkes. Med ukentlige tilpasninger 
                        holder du fremgangen oppe.
                    </div>
                </div>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
        </div>
    )
}