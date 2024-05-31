import { User } from '../../../../api/domain/entities/User';
import { UserRepository } from '../../../../api/domain/repositories/UserRepository';
import { AuthRepository } from '../../../../api/domain/repositories/AuthRepository';
import { RegisterUserUseCase } from '../../../../api/usecases/RegisterUser';

const userRepository = new UserRepository();
const authRepository = new AuthRepository();
const registerUserUseCase = new RegisterUserUseCase(
  userRepository,
  authRepository
);

export async function POST(req: Request) {
  const { userEmail, userPassword, userName } = await req.json();

  try {
    const user = await registerUserUseCase.execute(
      userEmail,
      userPassword,
      userName
    );

    return Response.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return Response.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
