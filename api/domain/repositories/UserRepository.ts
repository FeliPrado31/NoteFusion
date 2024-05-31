import { Firestore } from 'firebase-admin/firestore';
import { User } from '../entities/User';
import { firestore } from '../../../lib/main.admin';

export class UserRepository {
  private db!: Firestore;

  constructor() {
    this.initializeFirestore();
  }

  private async initializeFirestore() {
    this.db = await firestore();
  }

  public async save(user: User): Promise<void> {
    try {
      await this.db.collection('users').doc().set(user.toPlainObject());
    } catch (error) {
      throw new Error('Error saving user: ' + (error as Error).message);
    }
  }
}
