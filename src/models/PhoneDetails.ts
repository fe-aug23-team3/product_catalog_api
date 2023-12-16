import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { PhoneDescription } from '../types/phoneType';

@Table({
  tableName: 'phoneDetails',
  timestamps: false,
})
export class PhoneDetails extends Model {
  // @Unique
  @Column({
    primaryKey: true,
    type: DataType.STRING,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  namespaceId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  capacityAvailable: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  capacity: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  priceRegular: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  priceDiscount: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  colorsAvailable: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  images: string[];

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  description: PhoneDescription[];

  @Column({
    allowNull: false,

    type: DataType.STRING,
  })
  screen: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  resolution: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  processor: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ram: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  camera: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  zoom: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  cell: string[];
}
