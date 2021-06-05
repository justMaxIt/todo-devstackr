import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [{ text: '', completed: false }]
  showValidationErrors: boolean = false

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm): any {
    if (form.invalid) return this.showValidationErrors = true

    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false
    form.reset()
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)

    // this.dataService.updateTodo(todo)

  }


}
