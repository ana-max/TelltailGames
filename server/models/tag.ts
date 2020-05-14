import {
    AllowNull,
    AutoIncrement, BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import Adventure from './adventure';
import AdventureTags from './adventure_tags';

@Table
class Tag extends Model<Tag> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    ruName!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    enName!: string;

    @BelongsToMany(() => Adventure, () => AdventureTags)
    adventures!: Adventure[];
}

export default Tag;
