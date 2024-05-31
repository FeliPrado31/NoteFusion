// domain/repositories/AuthRepository.ts

import { Auth } from 'firebase-admin/auth';
import { auth } from '../../../lib/main.admin';

export class AuthRepository {
  private auth!: Auth;

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth() {
    this.auth = await auth();
  }

  public async createUser(email: string, password: string): Promise<any> {
    try {
      const userRecord = await this.auth.createUser({
        email,
        password,
      });
      return userRecord;
    } catch (error) {
      throw new Error('Error creating user: ' + (error as any).message);
    }
  }
}
