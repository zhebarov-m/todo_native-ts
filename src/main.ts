import {todoList} from "./TodoList.ts";
import {addTask, tasks} from "./Todo.ts";
import {deleteAllTasks} from "./Todo.ts";

console.log('Script loaded')
document.addEventListener('DOMContentLoaded', () => {
    const inputAddTask: HTMLInputElement | null = document.querySelector('.input_add-task');
    const submitButton = document.querySelector('.btn__submit');
    const deleteAllBtn = document.querySelector('.clear-all__btn')


    if (submitButton) {
        submitButton.addEventListener('click', () => {
            if (inputAddTask) {
                const taskText = inputAddTask.value;
                addTask(taskText);
                inputAddTask.value = '';
                todoList(tasks);
            }
        });
    }

    if(deleteAllBtn) {
        deleteAllBtn.addEventListener('click', () => {
            deleteAllTasks()
        })
    }
});
