import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import Achieve from './achieve';
import Scene from './scene';

@Table
class SceneAchieves extends Model<SceneAchieves> {
    @ForeignKey(() => Achieve)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    achieveId!: number;

    @ForeignKey(() => Scene)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    sceneId!: number;
}

export default SceneAchieves;
