import Action from '../models/action';
import Scene from '../models/scene';

export interface IAdventureData {
    id: number;
    name: string;
    description: string;
    pathToImg: string;
    firstSceneId: number;
    tags: ITagData[];
}

export interface ISceneData {
    scene: Scene;
    actions: Action[];
}

export interface ITagData {
    ruName: string;
    enName: string;
    adventures: IAdventureData[];
}
