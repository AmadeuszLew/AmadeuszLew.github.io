import { Feature } from "./feature.model";

export class ProjectDetail {
    public projectTitle:string;
    public features:Feature[];

    constructor(projectTitle:string,features:Feature[]){
            this.projectTitle=projectTitle;
            this.features=features;
        }

}
