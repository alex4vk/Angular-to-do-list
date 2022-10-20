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
    this.tasks.push({
      title: title,
      complete: false
    })
  }
}
