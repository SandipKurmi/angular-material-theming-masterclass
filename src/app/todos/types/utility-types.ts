// utility types Those are mapped types, which are used to transform the properties of one type to another type.
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
  //   description: 'test', // Error: Property 'description' is missing in type '{ title: string; completed: boolean; createdAt: number; }' but required in type 'Pick<Todo, "description">'.
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
