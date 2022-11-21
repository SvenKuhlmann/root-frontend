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
import {MatIconModule} from '@angular/material/icon'; 
import { ProjectEditDialogComponent } from '../project-edit-dialog/project-edit-dialog.component';
import { ProjectDeleteDialogComponent } from '../project-delete-dialog/project-delete-dialog.component';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, FlexLayoutModule, MatListModule, ScrollingModule, MatDialogModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects?: ProjectListResponse
  name?: string;

  constructor(public themeService: ThemeServie, private projectService: ProjectService, public dialog: MatDialog, public oauthService : OAuthService) { }

  ngOnInit(): void {
    this.load()

  }
  load(){
    this.projectService.getProjects().subscribe(projects => this.setup(projects))
  }
  setup(projects: ProjectListResponse): void {
    this.projects = projects
    console.log("projects", this.projects)
  }
  add() {
    let dialogRef = this.dialog.open(ProjectAddDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.load())
  }
  edit(project: Project) {
    let dialogRef = this.dialog.open(ProjectEditDialogComponent,{data: project});
    dialogRef.afterClosed().subscribe(() => this.load())
  }
  delete(project: Project) {
    let dialogRef = this.dialog.open(ProjectDeleteDialogComponent,{data: project});
    dialogRef.afterClosed().subscribe(() => this.load())
  }
  login(){
    this.oauthService.initLoginFlow();
  }
  logoff(){
    this.oauthService.logOut()
  }

}
