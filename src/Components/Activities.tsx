import React from "react";
import { useObservable } from "./observableHook";
import { todoService } from "./services";
import { Todo, VisibilityFilter } from "./todoService";

export const TodoList = () => {
    const todos = useObservable(todoService.todos);
    const filter = useObservable(todoService.visibilityFilter);
    const visibleTodos = getVisibleTodos(todos, filter);

    return (
        <div>
            <ul>
                {visibleTodos.map((todo, index) => (
                        <TodoItem key={index} todo={todo} index={index} />
))}
    </ul>
    <p>
    Show: <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>,
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>,
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>Completed</FilterLink>
        </p>
        </div>
);
};

const TodoItem = ({ todo: { text, completed }, index }: { todo: Todo; index: number }) => {
    return (
        <li
            style={{
        textDecoration: completed ? "line-through" : "none",
    }}
    onClick={() => todoService.toggleTodo(index)}
>
    {text}
    </li>
);
};

const FilterLink = ({ filter, children }: { filter: VisibilityFilter; children: React.ReactNode }) => {
    const activeFilter = useObservable(todoService.visibilityFilter);
    const active = filter === activeFilter;
    return active ? (
        <span>{children}</span>
    ) : (
        <a href="" onClick={() => todoService.setVisibilityFilter(filter)}>
    {children}
    </a>
);
};
import React from "react";
import { useObservable } from "./observableHook";
import { todoService } from "./services";
import { Todo, VisibilityFilter } from "./todoService";

export const TodoList = () => {
    const todos = useObservable(todoService.todos);
    const filter = useObservable(todoService.visibilityFilter);
    const visibleTodos = getVisibleTodos(todos, filter);

    return (
        <div>
            <ul>
                {visibleTodos.map((todo, index) => (
                        <TodoItem key={index} todo={todo} index={index} />
))}
    </ul>
    <p>
    Show: <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>,
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>,
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>Completed</FilterLink>
        </p>
        </div>
);
};

const TodoItem = ({ todo: { text, completed }, index }: { todo: Todo; index: number }) => {
    return (
        <li
            style={{
        textDecoration: completed ? "line-through" : "none",
    }}
    onClick={() => todoService.toggleTodo(index)}
>
    {text}
    </li>
);
};

const FilterLink = ({ filter, children }: { filter: VisibilityFilter; children: React.ReactNode }) => {
    const activeFilter = useObservable(todoService.visibilityFilter);
    const active = filter === activeFilter;
    return active ? (
        <span>{children}</span>
    ) : (
        <a href="" onClick={() => todoService.setVisibilityFilter(filter)}>
    {children}
    </a>
);
};
