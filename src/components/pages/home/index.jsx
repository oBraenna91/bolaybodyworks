import React from 'react';
import Intro from '../../intro';
import ScrollingComponent from '../../globals/scrollComponent';

export default function Home() {
    return(
        <div>
            <h1>Välkommen til Bolay Bodyworks</h1>
            <div className="filler">TEST</div>
            <ScrollingComponent containerName="section-1">
                <Intro />
            </ScrollingComponent>
            <div className="filler">Test</div>
            <ScrollingComponent containerName="section-2">
                <Intro />
            </ScrollingComponent>
            <div className="filler">Test</div>
        </div>
    )
}