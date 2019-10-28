// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Todo from "./Todo"

 function TodoList(props){

    return (
        <>
            {props.todos.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    handleToggle={props.handleToggle}
                />
                                     )
                            )
            }

        </>
    )
}

export default TodoList