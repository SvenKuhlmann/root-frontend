import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeServie } from '../theme.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Project, ProjectListResponse, ProjectService } from './project.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, FlexLayoutModule, FormsModule, MatInputModule, MatListModule, ScrollingModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {




  projects?: ProjectListResponse
  editProject?: Project;

  constructor(public themeService: ThemeServie, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.setup(projects))
  }
  setup(projects: ProjectListResponse): void {
    this.projects = projects
    console.log("projects", this.projects)
  }
  add() {
    this.projectService.add().subscribe();
  }
  send() {
    this.projectService.put(this.editProject!).subscribe();
    this.editProject = undefined;
  }
  setEditProject(project: Project) {
    this.editProject = project;
  }
}
