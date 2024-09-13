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
import img2 from '../../images/sara/black-standing.jpg';
import img3 from '../../images/sara/BW2.jpg';
import img4 from '../../images/sara/meat-colored.jpg';
import phone from '../../icons/phone.png'

export default function Home() {
    return(
        <div className="home-container">
            <div className={styles.container1}>
                <h1>Välkommen til Bolay Bodyworks</h1>
                <Intro />
            </div>
            <div className="appearing-container">
                <ImageCollage />
            </div>
            <ScrollingComponent containerName="scroll-container-1">
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceContainerImageContainer}>
                        <Image fluid alt="arrow-icon" src={arrow} />
                    </div>
                    <div className={styles.subHeader}>S E R V I C E S</div>
                </div>
                <Accordion 
                    title="Personlig träningsplan"
                    content="Få en anpassad träningsplan som passar dina behov, 
                    oavsett om du är nybörjare eller erfaren. Övningarna kommer 
                    att hjälpa dig att bygga styrka, öka konditionen och hålla 
                    motivationen uppe genom hela utmaningen."
                    icon={weights}
                />
                <Accordion 
                    title="Matplan"
                    content="Med över 200 läckra måltider anpassade efter dina 
                    preferenser och mål blir det enkelt att hålla sig på rätt spår. 
                    Byt ut måltider efter eget önskemål och njut av hälsosamma, 
                    balanserade rätter som håller dig mätt och energisk."
                    icon={meals}
                />
                <Accordion 
                    title="Gå ner i vikt"
                    content="Din väg till en hälsosam vikt. Fokus på balans mellan 
                    kost och träning kommer att hjälpa dig att nå dina viktmål på 
                    ett säkert och effektivt sätt. Inga strikta dieter – bara ett 
                    välstrukturerat program som får dig att må bra."
                    icon={slim}
                />
                <Accordion 
                    title="Välbefinnande för kropp och själ"
                    content="Välbefinnande handlar inte bara om hur du ser ut, utan 
                    också om hur du mår med dig själv. Genom mindfulness, e-böcker och 
                    live-sessioner kommer du att lära dig att slappna av, finna ro och 
                    ta hand om dig själv på vägen mot dina mål."
                    icon={lotus}
                />
                <Accordion 
                    title="Egen app"
                    content="Allt detta är samlat i en egen app som enkelt ger dig tillgång 
                    till alla dina träningspass, kostscheman (med detaljerade recept) och 
                    allt innehåll som Bolay Bodyworks erbjuder!"
                    icon={phone}
                />
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-6">
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceContainerImageContainer}>
                        <Image fluid alt="arrox-icon" src={arrow} />
                    </div>
                    <div className={styles.subHeader}>W O R K S</div>
                </div>
            </ScrollingComponent>
            <div className={styles.bigSubContainer}>
                <div className={styles.bigSubChild}>
                    <ScrollingComponent containerName="scroll-container-2">
                        <div className={styles.elaborate}>
                            <div className={`${styles.card} corner`}>
                                <Image src={img2} className="corner" fluid alt="Image of Sara" />
                            </div>
                            <div className={styles.elaborateH}>
                                Hitta din inre styrka
                            </div>
                            <div className={styles.elaborateP}>
                                Varje träningsplan är utformad för att utmana dig på din nivå, 
                                samtidigt som du bygger upp styrka, uthållighet och självförtroende. 
                                Från hemmaträning till gym – du kommer att ha allt du behöver för 
                                att lyckas. Med veckovisa anpassningar säkerställs att du fortsätter 
                                att göra framsteg.
                            </div>
                        </div>
                    </ScrollingComponent>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                </div>
                <div className={styles.bigSubChild}>
                    <ScrollingComponent containerName="scroll-container-3">
                        <div className={styles.elaborate}>
                            <div className={`${styles.card} corner`}>
                                <Image src={img1} className="corner" fluid alt="Image of Sara" />
                            </div>
                            <div className={styles.elaborateH}>
                                Njut av hälsosamma måltider
                            </div>
                            <div className={styles.elaborateP}>
                            Bolay Bodyworks gör det enkelt att äta hälsosamt utan stress. Varje dag 
                            kommer du att få förslag på måltider som kan anpassas efter dina 
                            preferenser och som ger dig den energi du behöver för att genomföra dina 
                            träningspass. Mat ska inte vara komplicerat – det ska vara en glädje!
                            </div>
                        </div>
                    </ScrollingComponent>
                    </div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                </div>
                <div className={styles.bigSubContainer}>
                    <div className={styles.bigSubChild}>
                        <ScrollingComponent containerName="scroll-container-4">
                            <div className={styles.elaborate}>
                                <div className={`${styles.card} corner`}>
                                    <Image src={img3} className="corner" fluid alt="Image of Sara" />
                                </div>
                                <div className={styles.elaborateH}>
                                    Håll dig på rätt spår
                                </div>
                                <div className={styles.elaborateP}>
                                Med dagliga påminnelser, motivationstips från Sara och live-sessioner 
                                kommer du aldrig att känna dig ensam på den här resan. Tillsammans 
                                bygger vi en stark mentalitet som hjälper dig att ta dig igenom utmaningarna 
                                och ser till att du håller dig på rätt spår.
                                </div>
                            </div>
                        </ScrollingComponent>
                    </div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className={styles.bigSubChild}>
                        <ScrollingComponent containerName="scroll-container-5">
                            <div className={styles.elaborate}>
                                <div className={`${styles.card} corner`}>
                                    <Image src={img4} className="corner" fluid alt="Image of Sara" />
                                </div>
                                <div className={styles.elaborateH}>
                                    Självutveckling
                                </div>
                                <div className={styles.elaborateP}>
                                För att hjälpa dig att hålla fokus på det som verkligen betyder något, 
                                ger Bolay Bodyworks dig tillgång till motiverande e-böcker om mental 
                                hälsa, självutveckling och hur du kan ta hand om din kropp och ditt sinne 
                                på ett holistiskt sätt. Du kommer att hitta de verktyg du behöver för att 
                                lyckas – både fysiskt och mentalt.
                                </div>
                            </div>
                        </ScrollingComponent>
                    </div>
                </div>
            {/* <ScrollingComponent containerName="scroll-container-4">
                <div className={styles.elaborate}>
                    <div className={`${styles.card} corner`}>
                        <Image src={img3} className="corner" fluid alt="Image of Sara" />
                    </div>
                    <div className={styles.elaborateH}>
                        Forbli på rett spor
                    </div>
                    <div className={styles.elaborateP}>
                        Med daglige påminnelser, motivasjonstips fra Sara, 
                        og live-sessions, vil du aldri føle deg alene på denne reisen. Sammen 
                        vil vi bygge en sterk mentalitet som vil hjelpe deg gjennom utfordringene,
                        og sørge for at du holder deg på sporet.
                    </div>
                </div>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-5">
                <div className={styles.elaborate}>
                    <div className={`${styles.card} corner`}>
                        <Image src={img4} className="corner" fluid alt="Image of Sara" />
                    </div>
                    <div className={styles.elaborateH}>
                        Selvutvikling
                    </div>
                    <div className={styles.elaborateP}>
                        For å hjelpe deg å holde fokus på det som virkelig betyr noe, 
                        vil Bolay Bodyworks gi deg tilgang til motiverende e-bøker om 
                        mental helse, selvutvikling, og hvordan du kan ta vare på kroppen 
                        og sinnet ditt på en helhetlig måte. Du vil finne verktøyene du 
                        trenger for å lykkes – både fysisk og mentalt.
                    </div>
                </div>
            </ScrollingComponent> */}
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
        </div>
    )
}