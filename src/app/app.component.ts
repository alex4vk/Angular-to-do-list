import { Component } from '@angular/core';

interface ITask {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  errorMsg: string = '';
  newTaskInput: string = '';

  tasks: ITask[] = [
    {
      title: 'Молоко',
      complete: false
    }, 
    {
      title: 'Хлеб',
      complete: true
    }, 
    {
      title: 'Что-то ещё',
      complete: false
    }
  ];
  
  toggle(task: ITask) {
    task.complete = !task.complete;
  }

  remove (ind: number) {
    this.tasks.splice(ind, 1);
  }

  add (title: string) {
    if (title != "") { 
      this.tasks.push( {title: title, complete: false} );
      this.errorMsg = '';
      this.newTaskInput = ''; 
    } else {
        this.errorMsg = 'Please enter a task name';
    }
  }
}
