import React, { useState, ReactNode, useEffect } from "react";

import { Menu } from "./Menu";
import { getToDos } from "./todoServices";
import { addToDo } from "./todoServices";
import { removeToDo } from "./todoServices";

export interface ToDo {
  id: number;
  text: string;
  state: string;
  responsable: string;
  dueDate: any;
  addedDate: string;
}

const LOCAL_STORAGE_KEY = "todo";

export const App = () => {
  const [todos, setTodos] = (useState<ToDo[]>([]));


  // nu merge

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);




  return (
    <Menu />

  );
}
