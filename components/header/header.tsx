import React from 'react';
import {Link} from 'react-router-dom';

import styles from './header.module.css';
import {createImagePath} from '../../server/common/utils';

export default function Header() {
    return (
        <header className={styles.logo}>
            <Link to='/' className={'routerLink'}>
                <p className={styles.logo__text}>
                    <img className={styles.logo__textImg}
                         src={createImagePath('/logotype.jpg')}
                         alt="Логотип" />
                    <span className={styles.logo__textSpan}>TellTail</span>Games
                </p>
            </Link>
        </header>
    );
}
