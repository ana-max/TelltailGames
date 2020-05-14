import React from 'react';
import {Link} from 'react-router-dom';

import styles from './adventure.module.css';
import {IAdventureData} from '../../server/common/types';
import {createImagePath, createSceneLink} from '../../server/common/utils';

export default function Adventure(adventure: IAdventureData) {
    const handleTagClick = () => {
        history.pushState({}, '', window.location.toString());
    };

    return (
        <section className={styles.adventure}>
            <Link to={createSceneLink(adventure.firstSceneId)}>
                <div className={styles.link}>
                    <img className={adventure.pathToImg ? styles.adventure__image : styles.adventure__withoutImage}
                         src={adventure.pathToImg
                             ? createImagePath(adventure.pathToImg)
                             : createImagePath('/default.jpg')}
                         alt="Картинка для приключения" />
                </div>
            </Link>

            <section className={styles.adventure__description}>
                <Link to={createSceneLink(adventure.firstSceneId)} className={'routerLink'}>
                    <p className={styles.link}>{adventure.name}</p>
                </Link>
                <p className={styles.adventureDescription__text}>{adventure.description}</p>
                <section className={styles.adventureDescription__tags}>
                    {adventure.tags.map(tag =>
                        <Link to={`/tags/${tag.enName}`} key={tag.enName}>
                            <p className={styles.tag} onClick={handleTagClick}>#{tag.ruName}</p>
                        </Link>
                    )}
                </section>
            </section>
        </section>
    );
}
