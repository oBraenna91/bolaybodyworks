import React from 'react';
import styles from './imageCollage.module.scss';
import Image  from 'react-bootstrap/Image';

export default function ImageCollage() {

    return(
        <div className={styles.container1}>
            <div className={`${styles.sub1} corner`}>

            </div>
            <div className={styles.container2}>
                <div className={`${styles.sub2} corner`}>

                </div>
                <div className={`${styles.sub3} corner`}>
                    
                </div>
            </div>
            <div className={`${styles.sub4} corner`}>
                
            </div>
            <div className={styles.container2}>
                <div className={`${styles.sub5} corner`}>
                
                </div>
                <div className={`${styles.sub6} corner`}>
                    
                </div>
            </div>
        </div>
    )
}