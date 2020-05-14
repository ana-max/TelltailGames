import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import Scene from './scene';

@Table
class Action extends Model<Action> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @ForeignKey(() => Scene)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    currentSceneId!: number;

    @ForeignKey(() => Scene)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    nextSceneId!: number;
}

export default Action;
