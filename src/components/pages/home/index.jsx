import React from 'react';
import Intro from '../../intro';
import ScrollingComponent from '../../globals/scrollComponent';
import ImageCollage from '../../imageCollage';

export default function Home() {
    return(
        <div className="home-container">
            <h1>Välkommen til Bolay Bodyworks</h1>
            <Intro />
            <div className="appearing-container">
                <ImageCollage />
            </div>
            <div className="filler">Test</div>
            <ScrollingComponent containerName="section-2">
                <Intro />
            </ScrollingComponent>
            <div className="filler">Test</div>
        </div>
    )
}