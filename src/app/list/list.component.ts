import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface task {
  id: number,
  priority: number,
  description: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  
  tasksList: task[] = [
    {
      id: 1,
      priority: 1,
      description: "Less priority Task"
    },
    {
      id: 2,
      priority: 2,
      description: "Medium task 2"
    },
    {
      id: 3,
      priority: 2,
      description: "Medium task"
    },
    {
      id: 4,
      priority: 3,
      description: "Most priority taks"
    }
  ];

  columns = ["description", "priority", "delete"];

  data: any;
  
  ngOnInit(): void {
    this.data = new MatTableDataSource(this.tasksList);
  }

  applyFilter(filter: any) {
    filter = filter.target?.value.trim();
    filter = filter.toLowerCase(); 
    this.data .filter = filter;
  }

  delete(row: task) {
    this.tasksList.splice(row.id, 1);
  }

  add(priority: number, description: string) {
    this.tasksList.push(
      { 
        description,
        priority,
        id: Math.random()
      })
  }
}
