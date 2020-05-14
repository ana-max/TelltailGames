import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {IAdventureData} from 'common/types';
import Animation from '../components/animation/animation';
import Adventure from '../components/adventure/adventure';
import Restart from '../components/restart/restart';
import {getAdventures} from '../server/common/utils';

interface IAdventurePageState {
    adventures: IAdventureData[];
    limit: number;
    offset: number;
    loading: boolean;
    hasMore: boolean;
    isError: boolean;
}

export default class AdventuresPage extends Component<IAdventurePageState> {
    state: IAdventurePageState = {
      adventures: [],
      limit: 5,
      offset: 0,
      loading: false,
      hasMore: true,
      isError: false
    };

    componentDidMount(): void {
        this.fetchAdventures();
    }

    fetchAdventures() {
        const queryParams = {
            limit: this.state.limit,
            offset: this.state.offset
        };
        getAdventures(queryParams)
          .then((adventures: IAdventureData[]) => this.setState(
            {
              loading: true,
              isError: false,
              adventures: this.state.adventures.concat(adventures),
              offset: this.state.offset + this.state.limit,
              hasMore: adventures.length === this.state.limit
            }))
          .catch(() => this.setState({isError: true}));
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
                <InfiniteScroll next={this.fetchAdventures.bind(this)}
                                hasMore={this.state.hasMore}
                                loader={Animation()}
                                dataLength={adventures.length}
                                scrollThreshold={1.0}>
                    {adventures.map(adventure =>
                      <Adventure name={adventure.name}
                                 description={adventure.description}
                                 pathToImg={adventure.pathToImg}
                                 firstSceneId={adventure.firstSceneId}
                                 tags={adventure.tags}
                                 key={adventure.id}
                                 id={adventure.id}/>)}
                </InfiniteScroll>
            </>
        );
    }
}
