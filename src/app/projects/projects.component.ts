import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeServie } from '../theme.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListResponse, ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatCardModule,  MatButtonModule, FlexLayoutModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects?: ProjectListResponse

  constructor(public themeService: ThemeServie, private prjectService: ProjectService) { }

  ngOnInit(): void {
    this.prjectService.getProjects().subscribe(projects => this.setup(projects))
  }
  setup(projects: ProjectListResponse): void {
    this.projects = projects
    console.log("projects", this.projects)
  }

}
