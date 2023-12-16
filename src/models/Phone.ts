import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { PhoneDetails } from './PhoneDetails';

@Table({
  tableName: 'phones',
  timestamps: false,
})
export class Phone extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @ForeignKey(() => PhoneDetails)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'phoneId',
  })
  phoneId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  itemId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fullPrice: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  screen: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  capacity: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ram: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount: number;
}
