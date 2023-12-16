import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'test',
  timestamps: false,
})
export class Test extends Model {
  // @Unique
  @Column({
    primaryKey: true,
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
