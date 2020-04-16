function delay(ms: number) {
  return new Promise((r) => setTimeout(r));
}

export type ToDo2 = {
  id: number;
  text: string;
  state: string;
  responsable: string;
  dueDate: any;
  addedDate: string;
};

export const todosList: ToDo2[] = [
  { id: 11, text: "Aplicatie", state: "open", responsable: "Andrei", dueDate: "2020-04-05", addedDate: "2020-04-13" },
  { id: 112, text: "Sport", state: "open", responsable: "Andrei", dueDate: "2020-04-05", addedDate: "2020-04-13" },
  { id: 113, text: "Mancare", state: "open", responsable: "Andrei", dueDate: "2020-06-05", addedDate: "2020-04-13" },
];

export async function getToDos(filter?: string): Promise<ToDo2[]> {
  await delay(1000);
  if (filter) {
    return todosList.filter((t) => t.text.indexOf(filter) != -1);
  } else {
    return todosList.map((t) => t);
  }
}

export async function addToDo(todo: ToDo2): Promise<void> {
  await delay(3000);
  todosList.push(todo);
}

export async function removeToDo(todo: ToDo2): Promise<void> {
  await delay(3000);
  const index = todosList.indexOf(todo);
  todosList.splice(index, 1);
}
