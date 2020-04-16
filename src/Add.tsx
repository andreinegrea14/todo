
import React, { FormEvent, useEffect } from "react";
import { useState, useReducer } from "react";
import "./site.css";
import { ToDo } from "./App";
import { useHistory, Redirect } from "react-router-dom";

import { addToDo, todosList } from "./todoServices";
import "react-datepicker/dist/react-datepicker.css";

export const Add = ({ todos, setTodos }:
    { todos: ToDo[], setTodos: (todo: ToDo[]) => void }) => {


    // const data = () => {
    //     const [startDate, setStartDate] = useState(new Date());
    //     return (
    //         <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    //     );
    // };


    var today = new Date();




    const [newTodo, setNewTodo] = useState<ToDo>({
        id: Date.now(),
        text: '',
        state: 'open',
        responsable: 'Andrei',
        dueDate: '',
        addedDate: '',
    });


    const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        } as any);
    }

    const handleNewTodo = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newTodo);
        if (newTodo.text === '') return;
        if (newTodo.responsable === '') return;
        if (newTodo.dueDate === '') return;
        if (newTodo.addedDate === '') return;
        //setTodos([newTodo, ...todos]);  //
        await addToDo(newTodo);
        history.push("/list");

    }


    console.log(newTodo);

    const history = useHistory();


    return (

        <div className="container">

            <h1> Add ToDo</h1>

            <form onSubmit={handleNewTodo}>

                <input placeholder="ToDo" value={newTodo.text} name="text" onChange={handleNewTodoChange} />
                <br />
                <input placeholder="State" value={newTodo.state} name="state" onChange={handleNewTodoChange} />
                <br />
                <input placeholder="Responsable" value={newTodo.responsable} name="responsable" onChange={handleNewTodoChange} />
                <br />
                <input placeholder="Due Date" value={newTodo.dueDate} name="dueDate" onChange={handleNewTodoChange} />
                <br />
                <input placeholder="Add Date" name="addedDate" onChange={handleNewTodoChange} />

                <button className="buton"
                    type="submit">
                    Add the to do</button>
            </form>


        </div>
    );

};























