import React from 'react';

function todo({ todo }) {
    const { id, title, completed } = todo;
    const h1 = <h1>{title}</h1>
    const test = completed ? <strike>{h1}</strike> : h1
    return (
        <div data-testid={`todo-${id}`} key={id}>{test}</div>
    )

}

export default todo;