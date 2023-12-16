import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
    type: DataType.ARRAY(DataType.TEXT),
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
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: false,
  })
  colorsAvailable: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: false,
  })
  images: string[];

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  description: { title: string; text: string[] }[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
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
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: false,
  })
  cell: string[];
}
