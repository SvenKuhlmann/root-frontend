import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ProjectService, Project } from '../projects/project.service';

@Component({
  selector: 'app-project-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './project-delete-dialog.component.html',
  styleUrls: ['./project-delete-dialog.component.scss']
})
export class ProjectDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) { }

  project: Project = this.data;

  ngOnInit(): void {
  }

  delete() {
    this.projectService.delete(this.project).subscribe();  
  }

}
