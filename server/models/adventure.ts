import {
    AllowNull,
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import AdventureTags from './adventure_tags';
import Scene from './scene';
import Tag from './tag';

@Table
class Adventure extends Model<Adventure> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    description!: string;

    @Column(DataType.STRING)
    pathToImg!: string;

    @AllowNull(false)
    @ForeignKey(() => Scene)
    @Column(DataType.INTEGER)
    firstSceneId!: number;

    @BelongsToMany(() => Tag, () => AdventureTags)
    tags!: number[];
}

export default Adventure;
