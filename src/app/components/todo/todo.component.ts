import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import {TodoApiService} from './../../services/todo-api.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos!: TodoModel[];
  inputTodo: string="";
  constructor(private apiService: TodoApiService){}

  ngOnInit(): void { 
  this.todos = []
  //fetch records from db using API get
  this.apiService.getAll().subscribe((resp: TodoModel[]) => {    
    this.todos = resp;
    console.log(this.todos);
  })}

  toggleDone (id:number) {
    // this.todos.map((v, i) => {
    //   if(i == id) v.completed = !v.completed;

    //   return v;
    // })
  }

  deleteTodo (id:number) {
    this.todos =this.todos.filter((v,i) => i !==id);
  }

  addTodo () {
    // this.todos.push({
    //   content:this.inputTodo,
    //   completed:false
    // });

    this.inputTodo ="";
  }
}
