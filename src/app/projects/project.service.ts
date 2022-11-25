import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { OAuthService } from "angular-oauth2-oidc";


@Injectable({
    providedIn: 'root',
})
export class ProjectService {


    constructor(private http: HttpClient, private oauthService: OAuthService) { }

    getProjects(): Observable<ProjectListResponse> {
        return this.http.get<ProjectListResponse>("/api/project")
    }

    post(project: Project): Observable<any> {
        var headers = new HttpHeaders().set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`);
        var options = { headers: headers }
        return this.http.post("/api/project", project, options);
    }

    put(project: Project): Observable<any> {
        return this.http.put("/api/project/" + project?.id, project);
    }

    delete(project: Project): Observable<any> {
        return this.http.delete("/api/project/" + project?.id);
    }

}

export interface ProjectListResponse {
    projects: Project[]
}

export interface Project {
    name?: string;
    description?: string;
    links?: DomainLink[];
    id?: string;
}

export interface DomainLink {
    label: string;
    href: string;
}