//Mapped Types! 🎉 By @sandipkurmi0
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type LockedEntity<T> = {
  readonly [P in keyof T]: T[P];
};

const user: LockedEntity<User> = {
  id: 1,
  name: 'John',
  age: 25,
  email: 'test@gmail.com',
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
