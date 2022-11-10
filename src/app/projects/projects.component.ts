import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeServie } from '../theme.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Project, ProjectListResponse, ProjectService } from './project.service';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProjectAddDialogComponent } from '../project-add-dialog/project-add-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, FlexLayoutModule, MatListModule, ScrollingModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {




  projects?: ProjectListResponse
  editProject?: Project;

  constructor(public themeService: ThemeServie, private projectService: ProjectService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.setup(projects))
  }
  setup(projects: ProjectListResponse): void {
    this.projects = projects
    console.log("projects", this.projects)
  }
  add() {
    let dialogRef = this.dialog.open(ProjectAddDialogComponent);
  }
  send() {
    this.projectService.put(this.editProject!).subscribe();
    this.editProject = undefined;
  }
  setEditProject(project: Project) {
    this.editProject = project;
  }
}
