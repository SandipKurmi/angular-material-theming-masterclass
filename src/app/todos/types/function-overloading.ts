//function Overloading By @sandipkurmi0
function getEntity(type: 'project'): Project | null;
function getEntity(type: 'task'): Task | null;
function getEntity(type: 'user'): User | null;
function getEntity(
  type: 'user' | 'project' | 'task'
): User | Project | Task | null {
  if (type === 'user') {
    return { name: 'user', age: 20 };
  }
  if (type === 'project') {
    return { name: 'project', status: 'active' };
  }
  if (type === 'task') {
    return { name: 'task', isPending: 'pending' };
  }
  return null; // or throw an error, depending on your use case
}

interface User {
  name: string;
  age: number;
}
interface Project {
  name: string;
  status: string;
}
interface Task {
  name: string;
  isPending: string;
}

const userEntity = getEntity('user');
const projectEntity = getEntity('project');
const taskEntity = getEntity('task');
