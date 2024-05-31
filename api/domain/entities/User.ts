// domain/entities/User.ts
export class User {
  private email: string;
  private password: string;
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getName(): string {
    return this.name;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public static create(email: string, password: string, name: string): User {
    return new User(email, password, name);
  }

  public toPlainObject(): { [key: string]: any } {
    return {
      email: this.email,
      name: this.name,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
