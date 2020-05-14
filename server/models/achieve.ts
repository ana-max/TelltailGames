import {
    AllowNull,
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import Scene from './scene';
import SceneAchieves from './scene_achieves';

@Table
class Achieve extends Model<Achieve> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    pathToImg!: string;

    @BelongsToMany(() => Scene, () => SceneAchieves)
    scenes!: Scene[];
}

export default Achieve;
