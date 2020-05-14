import {
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import Achieve from './achieve';
import SceneAchieves from './scene_achieves';

@Table
class Scene extends Model<Scene> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    description!: string;

    @Column(DataType.STRING)
    descriptionPosition!: string;

    @Column(DataType.STRING)
    pathToImg!: string;

    @BelongsToMany(() => Achieve, () => SceneAchieves)
    achieves!: Achieve[];
}

export default Scene;
