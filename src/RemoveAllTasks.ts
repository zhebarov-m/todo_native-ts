import {tasks} from "./AddTask.ts";
import {todoList} from "./TodoList.ts";

export const deleteAllTasks = () => {
    tasks.splice(0);
    todoList(tasks);
}
