interface IUserData {
  id: string;
  name: string;
  room: string;
}

interface IAddUserResponse {
  user?: IUserData;
  error?: string;
}

export default class User {
  users: IUserData[];

  constructor() {
    this.users = [];
  }

  public addUser({ id, name: raw_name, room: raw_room }: IUserData): IUserData {
    const name = raw_name.trim().toLowerCase();
    const room = raw_room.trim().toLowerCase();

    // if (!name || !room) return { error: 'Username and room are required' };

    // const existingUser = this.findByNameAndRoom({ name, room });

    // if (existingUser) return { error: 'Username is taken' };

    const user: IUserData = { id, name, room };

    this.users.push(user);

    return user;
  }

  public removeUser(id: string): IUserData | null {
    const index = this.users.findIndex(user => user.id === id);

    if (index !== -1) return this.users.splice(index, 1)[0];

    return null;
  }

  private findByNameAndRoom({ name, room }: Omit<IUserData, 'id'>): IUserData {
    return this.users.find(user => user.room === room && user.name === name);
  }

  public getUser(id: string): IUserData {
    return this.users.find(user => user.id === id);
  }

  public getUsersInRoom(room: string): IUserData[] {
    return this.users.filter(user => user.room === room);
  }
}
