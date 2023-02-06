import IProduct from '../interfaces/product.interface';
import ProductModel from '../models/product.model';
import connection from '../models/connection';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const created: IProduct = await this.model.create(product);
    return created;
  };
}