import {AllowNull, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';

import Adventure from './adventure';
import Tag from './tag';

@Table
class AdventureTags extends Model<AdventureTags> {
    @AllowNull(false)
    @ForeignKey(() => Adventure)
    @Column(DataType.INTEGER)
    adventureId!: number;

    @AllowNull(false)
    @ForeignKey(() => Tag)
    @Column(DataType.INTEGER)
    tagId!: number;
}

export default AdventureTags;
