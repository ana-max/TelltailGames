import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router';

import {IAdventureData, ITagData} from 'common/types';
import Animation from '../components/animation/animation';
import Adventure from '../components/adventure/adventure';
import Restart from '../components/restart/restart';
import {getTag} from '../server/common/utils';

interface ITagPageState {
    adventures: IAdventureData[];
    tagRu: string;
    loading: boolean;
    isError: boolean;
}

export default class TagPage extends Component<RouteComponentProps, ITagPageState> {
    state: ITagPageState = {
      adventures: [],
      tagRu: '',
      loading: false,
      isError: false
    };

    componentDidMount(): void {
        this.fetchTags();
    }

    fetchTags() {
        const queryParams = this.props.match.params;
        getTag(queryParams)
          .then((data: ITagData) => this.setState({
              tagRu: data.ruName,
              loading: true,
              adventures: this.state.adventures.concat(data.adventures)
          }))
          .catch(() => this.setState({
              isError: true
          }));
    }

    render() {
        if (this.state.isError) {
            return <Restart />;
        }
        if (!this.state.loading) {
            return <Animation />;
        }
        const adventures = this.state.adventures;
        return (
            <>
                <p className="tag">#{this.state.tagRu}</p>
                {adventures.map(adventure =>
                  <Adventure name={adventure.name}
                             description={adventure.description}
                             pathToImg={adventure.pathToImg}
                             firstSceneId={adventure.firstSceneId}
                             tags={adventure.tags}
                             key={adventure.id}
                             id={adventure.id}/>)}
                }
            </>
        );
    }
}
