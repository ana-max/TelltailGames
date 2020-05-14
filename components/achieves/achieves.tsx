import React from 'react';

import Achieve from '../../server/models/achieve';
import styles from './achieves.module.css';
import {createImagePath} from '../../server/common/utils';

interface IAchievesProps {
    achieves: Achieve[];
}

export default function Achieves({achieves}: IAchievesProps) {
    return (
        <section className={styles.achieves}>
            {achieves.map(achieve => {
                return (
                    <section className={styles.achieve} key={achieve.id}>
                        <section className={styles.achieve__image}>
                            <img className={styles.achieveImage}
                                 src={createImagePath(achieve.pathToImg)}
                                 alt='Изображение ачивки' />
                        </section>
                        <section className={styles.achieve__description}>
                            <p className={styles.achieveDescription__header}>Достижение получено</p>
                            <p className={styles.achieveDescription__name}>{achieve.name}</p>
                        </section>
                    </section>
                );
            })}
        </section>
    );
}
