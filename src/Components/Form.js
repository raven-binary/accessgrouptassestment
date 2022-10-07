import React from "react";
import "../App.css";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, edit, setEdit}) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setEdit([...edit, {id: uuidv4(), title:input, completed: false}]);
        setInput("");
    };

    return (
        <form>
            <input 
            type="text"
            placeholder="Enter details"
            classname="task-input"
            value = {input}
            required
            onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;