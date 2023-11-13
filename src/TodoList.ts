import { Task } from "./main.ts";

const app: HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;

export function todoList(tasks: Task[]): void {
    if (app) {
        const ul: HTMLUListElement | null = document.querySelector('.tasks_list');
        if (ul) {
            ul.innerHTML = '';

            if (tasks.length === 0) {
                const emptyMessage = document.createElement('li');
                emptyMessage.textContent = 'Список пуст';
                ul.appendChild(emptyMessage);
            } else {
                tasks.forEach(task => {
                    const li: HTMLLIElement = document.createElement('li');
                    li.textContent = `${task.id}) ${task.text}`;
                    ul.appendChild(li);
                });
            }
        }
    }
}
