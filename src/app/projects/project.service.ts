import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class ProjectService{

    constructor(private http : HttpClient){}

    public getProjects() : Observable<ProjectListResponse>{
        return this.http.get<ProjectListResponse>("/api/project")
    }
    
}

export interface ProjectListResponse{
    projects: Project[]
}

export interface Project{
    name: string;
    links: DomainLink[];
}

export interface DomainLink{
    label: string;
    href: string;
}