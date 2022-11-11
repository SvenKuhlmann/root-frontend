import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Project, ProjectService } from '../projects/project.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-project-add-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './project-add-dialog.component.html',
  styleUrls: ['./project-add-dialog.component.scss']
})
export class ProjectAddDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ProjectAddDialogComponent>, private projectService: ProjectService) { }

  project: Project = {name: "", description: "", links: []}

  ngOnInit(): void {

  }

  addLink() {
    this.project.links?.push({label: "", href: ""})
    console.log("project" , this.project)
  }

  post(){
    this.projectService.post(this.project).subscribe();
  }

  

}
