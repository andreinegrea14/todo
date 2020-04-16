import React, { useState, useEffect } from "react";


import "./site.css";
import { ToDo } from "./App";
import { ToDo2 } from "./todoServices";

import { removeToDo, todosList, getToDos } from "./todoServices";

export const List = ({ todos, setTodos }: { todos: ToDo[], setTodos: (todo: ToDo[]) => void }) => {




    const removeTodo = async (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const asyncFunction = async () => {
        const data = await getToDos();
        setTodos(data);
    }

    useEffect(() => {
        asyncFunction();
    }, []);



    // merge dar nu salveaza
    useEffect(() => {
        localStorage.setItem('', JSON.stringify(todos));
    });

    function useLocalState(localItem: any) {
        const [loc, setState] = useState(localStorage.getItem(localItem));

        function setLoc(newItem: string) {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }

        return [loc, setLoc];
    }




    return (
        <div>



            <table className="table" >
                <thead>
                    <tr>
                        <th>ToDo Name</th>
                        <th>State</th>
                        <th>responsable</th>
                        <th>dueDate</th>
                        <th>addedDate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (

                        <tr>
                            <td >
                                {todo.text}
                            </td>
                            <td className="todo" >
                                {todo.state}
                            </td>
                            <td className="todo" >
                                {todo.responsable}
                            </td>
                            <td className="todo">
                                {todo.dueDate}
                            </td>
                            <td className="todo" >
                                {todo.addedDate}
                            </td>
                            <td key={todo.id}>
                                <a className="del" href="#delete" onClick={() => removeTodo(todo.id)}>
                                    Delete
                                </a>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div >

    );

};

