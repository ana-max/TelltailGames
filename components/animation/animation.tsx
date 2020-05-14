import React from 'react';

import styles from './animation.module.css';

export default function Animation() {
    const divCount = 7;
    return (
        <div className={styles.overlayLoader}>
            <div className={styles.loader}>
              {[...Array(divCount)].map((_, ind) => <div key={ind} />)}
            </div>
        </div>
    );
}
