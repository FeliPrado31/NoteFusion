import { User } from '../domain/entities/User';
import { AuthRepository } from '../domain/repositories/AuthRepository';
import { UserRepository } from '../domain/repositories/UserRepository';

export class RegisterUserUseCase {
  private userRepository: UserRepository;
  private authRepository: AuthRepository;

  constructor(userRepository: UserRepository, authRepository: AuthRepository) {
    this.userRepository = userRepository;
    this.authRepository = authRepository;
  }

  public async execute(
    userEmail: string,
    userPassword: string,
    userName: string
  ): Promise<User> {
    const user = User.create(userEmail, userPassword, userName);
    await this.authRepository.createUser(userEmail, userPassword);
    await this.userRepository.save(user);
    return user;
  }
}
