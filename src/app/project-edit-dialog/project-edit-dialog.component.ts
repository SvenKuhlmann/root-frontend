import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Project, ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-project-edit-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) { }

  project: Project = this.data;

  ngOnInit(): void {
  }

  addLink() {
    this.project.links?.push({ label: "", href: "" })
    console.log("project", this.project)
  }

  put() {
    this.projectService.put(this.project).subscribe();
  }

}
