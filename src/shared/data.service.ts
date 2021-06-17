import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    // new Todo('This is test', true),
    // new Todo('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quidem, temporibus repellat ipsa nobis dolor, aspernatur ratione ex itaque sed odit aliquid earum voluptas quam enim impedit libero veritatis autem.'),
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

}
