import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Project, ProjectListResponse, ProjectService } from './project.service';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'; 
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatCardModule, MatButtonModule, FlexLayoutModule, MatListModule, ScrollingModule, MatDialogModule, MatIconModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects?: ProjectListResponse
  scopes?: String[]
  editPermission = false;
  claims?: Record<string, any>;

  constructor( private projectService: ProjectService, public dialog: MatDialog, public oauthService : OAuthService, public authService: AuthService) { }

  ngOnInit(): void {
    this.load()

  }
  load(){
    this.projectService.getProjects().subscribe(projects => this.setup(projects))
  }
  setup(projects: ProjectListResponse): void {
    this.projects = projects
    this.authService.loginEvent.then(() => {this.scopes = <String[]>this.oauthService.getGrantedScopes()});
  }
}
