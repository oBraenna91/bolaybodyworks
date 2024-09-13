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
                <h3>Upplysningar om ångerrätt och returrätt</h3>
            </ScrollingComponent>
            <ScrollingComponent containerName="scroll-container-2">
                <p>Du har rätt att frånträda detta avtal inom 14 dagar utan att ange 
                    något skäl för detta. Ångerfristen löper ut 14 dagar efter den dag då 
                    du, eller en annan tredje part än transportören som du har utsett, 
                    får varorna i fysisk besittning.</p>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-3">
                <p>För att kunna utnyttja ångerrätten måste du underrätta oss:
                    <br></br>
                    <br></br>
                    Gymfluence OÜ <br></br>
                    Paepargi 43, 28, 11417 Tallinn, Estonia <br></br>
                    +37255574987 <br></br>
                    jk@gymfluence.io
                    <br></br>
                    <br></br>
                    på ett tydligt sätt om ditt beslut att frånträda avtalet (t.ex. via brev skickat med post eller e-post).</p>
            </ScrollingComponent>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-4">
                <p>För att uppfylla ångerfristen räcker det att du skickar meddelandet om att du vill utnyttja ångerrätten innan ångerfristen löper ut.<br></br>
                    <br></br>
                    Du måste själv stå för de direkta kostnaderna för att returnera varorna.<br></br>
                    <br></br>
                    <br></br>
                    <h3>Konsekvenser av att ångerrätten utnyttjas.</h3>
                    <br></br>
                    Om du frånträder detta avtal, ska vi återbetala alla betalningar vi mottagit från dig, förutom leveranskostnaderna, utan onödigt dröjsmål och senast 14 dagar efter den dag då vi mottagit meddelandet om ditt beslut att frånträda avtalet.<br></br>
                    <br></br>
                    </p>
            </ScrollingComponent>
            <ScrollingComponent containerName="scrolling-container-5">
                <p>
                Vi genomför återbetalningen med samma betalningsmedel som du använde vid den ursprungliga transaktionen, såvida du inte uttryckligen kommit överens med oss om något annat. Fraktkostnader kommer att dras från återbetalningsbeloppet.<br></br>
                    <br></br>
                    Under inga omständigheter kommer du att påföras någon avgift till följd av återbetalningen.<br></br>
                    <br></br>
                    Du är endast ansvarig för en eventuell värdeminskning på varorna som beror på annan hantering än vad som är nödvändigt för att fastställa varornas art, egenskaper och funktion.<br></br>
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