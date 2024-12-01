export class Project {
    public projectLogo:string;
    public projectTitle:string;
    public technologies:string[];
    public descriptionPreview:string;
    public description:string;
    public projectLink:string;
    public projectPhotos:string[];

    constructor(projectLogo:string,projectTitle:string,technologies:string[],descriptionPreview:string,
        description:string,projectLink:string,projectPhotos:string[]){
            this.projectLogo=projectLogo;
            this.projectTitle=projectTitle;
            this.technologies=technologies;
            this.descriptionPreview=descriptionPreview;
            this.description=description;
            this.projectLink=projectLink;
            this.projectPhotos=projectPhotos;
        }

}