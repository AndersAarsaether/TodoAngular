import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [];

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  loadTodos() {
    this.http.get('http://localhost:8080/todos').subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  deleteTodo = (id: number) =>
    this.http
      .delete('http://localhost:8080/todos/' + id)
      .subscribe((response: any) => console.log(response));
}
