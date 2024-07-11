export default class Task {
  private static takenIds: Set<string> = new Set();
  id: string;
  name: string;
  completed: boolean;

  constructor(id: string, name: string, completed: boolean) {
    if (Task.isIdTaken(id)) {
      throw new Error(`ID ${id} is already taken.`);
    } else {
      Task.registerId(id);
    }

    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  private static isIdTaken(id: string): boolean {
    return this.takenIds.has(id);
  }

  private static registerId(id: string) {
    this.takenIds.add(id);
  }
}
