import React, { useReducer } from "react";


import "./site.css";
import { ToDo } from "./App";




export const Add = ({ todos }: { defaultToDo: string, todos: ToDo[], setTodos: (todo: ToDo[]) => void }) => {



    const [userInput, setUserInput] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            todo: '',
            state: '',
            resp: '',
            term: '',
            data: '',
        }
    );

    // const handleNewTodo = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setUserInput([...todos, { id: Date.now(), text: }]);
    // }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const name = e.target.name;
        const newValue = e.target.value;

        setUserInput({ [name]: newValue });
    }

    return (
        <div>
            <form>
                <br />
                <label>Name: </label>
                {userInput.todo}
                <br />
                <input type="text" name="todo" value={userInput.todo} onChange={handleChange} />

                <br />
                <label>State: </label>
                {userInput.state}
                <br />
                <input type="text" name="state" value={userInput.state} onChange={handleChange} />

                <br />
                <label>Responsabil: </label>
                {userInput.resp}
                <br />
                <input type="text" name="resp" value={userInput.resp} onChange={handleChange} />

                <br />
                <label>Termen: </label>
                {userInput.term}
                <br />
                <input type="text" name="term" value={userInput.term} onChange={handleChange} />


                <br />
                <label>Data: </label>
                {userInput.data}
                <br />
                <input type="text" name="data" value={userInput.data} onChange={handleChange} />


                {todos.map((todo) => (
                    <li className="todo" key={todo.id}>
                        {todo.text}
                    </li>
                ))}
                <br />
            </form>
        </div>
    );


};





//




// 





























