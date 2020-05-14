import {Sequelize, SequelizeOptions} from 'sequelize-typescript';
import config from 'config';

import Achieve from './models/achieve';
import Action from './models/action';
import Adventure from './models/adventure';
import AdventureTags from './models/adventure_tags';
import Scene from './models/scene';
import SceneAchieves from './models/scene_achieves';
import Tag from './models/tag';

export default async function connectDB(): Promise<Sequelize> {
    const sequelizeOptions: SequelizeOptions = {
        host: config.get('databaseHost'),
        port: config.get('databasePort'),
        username: config.get('databaseUsername'),
        password: config.get('databasePassword'),
        database: config.get('databaseName'),

        dialect: config.get('dialect')
    };

    const sequelize = new Sequelize(sequelizeOptions);
    sequelize.addModels([
        Achieve,
        Action,
        Adventure,
        AdventureTags,
        Tag,
        Scene,
        SceneAchieves
    ]);

    return sequelize;
}
