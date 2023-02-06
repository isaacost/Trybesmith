import { IToken, IUser } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import connection from '../models/connection';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const created: IToken = await this.model.create(user);
    return created;
  };
}