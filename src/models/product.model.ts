import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
    default: https://upload.wikimedia.org/wikipedia/commons/1/16/Deletion_icon.svg,
  })
  imgUrl?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
