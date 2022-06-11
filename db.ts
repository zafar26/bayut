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
  corporate!: Table<User>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      user: 'userID, name, username, token,  userRoleID ' ,// Primary key and indexed props
      corporate: 'userID, name, username, token,  userRoleID ', // Primary key and indexed props
      // images: 'PropertyID, image, base64' // Primary key and indexed props
    });
  }
}
export function resetDatabase() {
  return db.transaction('rw', db.corporate, db.user, async () => {
    await Promise.all(db.tables.map(table => table.clear()))
  });
  
}
export const db = new MySubClassedDexie();