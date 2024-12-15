export class Project {
    public projectLogo:string;
    public projectPage:string;
    public projectTitle:string;
    public technologies:string[];
    public descriptionPreview:string;
    public description:string;
    public projectLink:string;
    public projectPhotos:string[];

    constructor(projectLogo:string,projectPage:string,projectTitle:string,technologies:string[],descriptionPreview:string,
        description:string,projectLink:string,projectPhotos:string[]){
            this.projectLogo=projectLogo;
            this.projectPage=projectPage;
            this.projectTitle=projectTitle;
            this.technologies=technologies;
            this.descriptionPreview=descriptionPreview;
            this.description=description;
            this.projectLink=projectLink;
            this.projectPhotos=projectPhotos;
        }

}
