import { Feature } from "./feature.model";

export class ProjectDetail {
    public projectTitle:string;
    public projectPage:string;
    public features:Feature[];

    constructor(projectTitle:string, projectPage:string,features:Feature[]){
            this.projectTitle=projectTitle;
            this.projectPage=projectPage;
            this.features=features;
        }

}
