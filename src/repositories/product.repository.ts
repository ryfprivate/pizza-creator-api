import {DefaultCrudRepository} from '@loopback/repository';
import {Product} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Product, dataSource);
  }
}
