import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Project } from '../projects/project.service';


@Component({
  selector: 'app-project-add-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, FormsModule],
  templateUrl: './project-add-dialog.component.html',
  styleUrls: ['./project-add-dialog.component.scss']
})
export class ProjectAddDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ProjectAddDialogComponent>) { }

  project: Project = {name: "", description: "", links: []}

  ngOnInit(): void {

  }

  addLink() {

    this.project.links?.push({label: "", href: ""})
    console.log("project" , this.project)
  }

}
