
import {todoList} from "./TodoList.ts";
import {Task} from "./types/types.ts";

export const tasks: Task[] = [];

export function addTask(text: string): void {
    const newTask: Task = {
        id: tasks.length + 1,
        text,
        completed: false,
    };
    tasks.push(newTask);
}

export const deleteAllTasks = () => {
    tasks.splice(0);
    todoList(tasks);
}


