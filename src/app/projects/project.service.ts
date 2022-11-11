import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    
    constructor(private http: HttpClient) { }

    getProjects(): Observable<ProjectListResponse> {
        return this.http.get<ProjectListResponse>("/api/project")
    }

    post(project: Project): Observable<any> {
        return this.http.post("/api/project", project);
    }

    put(project: Project): Observable<any> {
        return this.http.put("/api/project/" + project?.id, project);
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