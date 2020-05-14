import React from 'react';
import {Link} from 'react-router-dom';

import Action from '../../server/models/action';
import styles from './action.module.css';
import {createSceneLink} from '../../server/common/utils';

interface IActionsProps {
    actions: Action[];
}

export default function Actions({actions}: IActionsProps) {
    return (
        <section className={styles.actions}>
            {actions.map(action =>
                <Link to={createSceneLink(action.nextSceneId)} key={action.id} className={'routerLink'}>
                  <p className={styles.actionName}>{action.name}</p>
                </Link>
            )}
        </section>
    );
}
