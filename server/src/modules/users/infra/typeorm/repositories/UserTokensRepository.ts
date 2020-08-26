import { getRepository, Repository } from 'typeorm';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UseToken from '@modules/users/infra/typeorm/entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UseToken>;

  constructor() {
    this.ormRepository = getRepository(UseToken);
  }

  public async findByToken(token: string): Promise<UseToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UseToken> {
    const userToken = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
