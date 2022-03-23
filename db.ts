// db.ts
import Dexie, { Table } from 'dexie';

export interface User {
  userId: Number,
  name: String,
  username: String,
  token:String,
  userRoleID: Number
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  user!: Table<User>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      user: 'userID, name, username, token,  userRoleID ' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();