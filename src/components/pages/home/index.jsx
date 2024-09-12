import React from 'react';
import Intro from '../../intro';
import ScrollingComponent from '../../globals/scrollComponent';
import ImageCollage from '../../imageCollage';
import Accordion from '../../globals/accordion';
import lotus from '../../icons/lotus.png';

export default function Home() {
    return(
        <div className="home-container">
            <h1>Välkommen til Bolay Bodyworks</h1>
            <Intro />
            <div className="appearing-container">
                <ImageCollage />
            </div>
            <ScrollingComponent containerName="scroll-container-1">
                <Accordion 
                    title="Test"
                    content="Dette er en test"
                    icon={lotus}
                />
                <Accordion 
                    title="Test2"
                    content="Dette er en test2"
                    icon={lotus}
                />
            </ScrollingComponent>
            <div className="filler"></div>
            <ScrollingComponent containerName="scroll-container-2">
                <Intro />
            </ScrollingComponent>
            <div className="filler"></div>
        </div>
    )
}