import { useState } from "react";

export default function Todo(props) {
    const {details} = props;

    if (!details) {
        return null;
    }

    return (
    <>
        <div className="todo">
            <div className="todo-info">
                <h1>{details.description}</h1>
                <h2>{details.category}</h2>
                <p>Created on: {details.date}</p>
            </div>
        </div>
    </>
    )
}