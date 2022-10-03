import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [];
  summary: string;
  description: string;

  constructor(private http: HttpClient) {
    this.loadTodos();
    this.summary = '';
    this.description = '';
  }

  loadTodos() {
    this.http.get('/todos').subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  deleteTodo(id: number) {
    this.http
      .delete('/todos/' + id)
      .subscribe((response: any) => console.log(response));
  }

  addTodo() {
    this.http
      .post('/todos', {
        summary: this.summary,
        description: this.description,
      })
      .subscribe((response: any) => console.log(response));
  }
}
