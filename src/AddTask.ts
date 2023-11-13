import {Task} from "./main.ts";

export const tasks: Task[] = [];

export function addTask(text: string): void {
    const newTask: Task = {
        id: tasks.length + 1,
        text,
        completed: false,
    };
    tasks.push(newTask);
}