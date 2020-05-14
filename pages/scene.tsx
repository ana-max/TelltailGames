import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router';

import {ISceneData} from 'common/types';
import Achieves from '../components/achieves/achieves';
import Animation from '../components/animation/animation';
import Actions from '../components/action/action';
import Restart from '../components/restart/restart';
import {getSceneData} from '../server/common/utils';
import {SURGE_PATH} from '../server/common/consts';

interface IScenePageState {
    sceneData?: ISceneData;
    isError: boolean;
}

export default class ScenePage extends Component<RouteComponentProps, IScenePageState> {
    state: IScenePageState = {
        sceneData: undefined,
        isError: false
    };

    componentDidMount(): void {
      const queryPrams = this.props.match.params;
      getSceneData(queryPrams)
        .then((sceneData: ISceneData) => this.setState({sceneData}))
        .catch(() => this.setState({isError: true}));
    }

    render() {
        if (this.state.isError) {
          return <Restart/>;
        }
        const {sceneData} = this.state;
        if (!sceneData) {
            return <Animation />;
        }
        const scene = sceneData.scene;
        const actions = sceneData.actions;
        return (
            <>
                <section className='scene__img'>
                    <img className={scene.pathToImg ? 'sceneImage' : 'sceneImage sceneWithoutImage'}
                         src={scene.pathToImg ? `${SURGE_PATH}/images${scene.pathToImg}` : '' }
                         alt={scene.pathToImg ? 'Изображение действия': ''} />
                    {scene.descriptionPosition ?
                        <pre className={`scene__description ${scene.descriptionPosition}`}>{scene.description}</pre> :
                        <pre className='scene__description leftTop descriptionWithoutImage'>{scene.description}</pre>
                    }
                </section>
                <Achieves achieves={scene.achieves} />
                <Actions actions={actions} />
            </>
        );
    }
}
