import { Project } from "./project.model";

export class ProjectsService {
    private projects:Project[]=[
        new Project('./assets/projects/pogon_mogilno.png','TMS- team management system',['Vue 2','Vuetify','Axios'],'Made by team of four people. Two of us are responsible for the front end, and 2 for the back-end. Unfortunately, my front-end friend had a covid at the time of creating the beta version which is now live <br>I managed to make almost all the work, leaving him only to do "teams view" which is 1 of 8','full description','https://tmspanel.grinddev.pl',['somephotos']),
        new Project('./assets/projects/lenny_logo.png','Sneakers shop',['UI/UX','Angular','Bootstrap 5','Typescript','Firebase','RxJS'],"Simple shop sample developed for small sellers, focused on limited sneakers. In beta version client's are able to login, add items to cart. Designed to look great both on small devices, and computers.",'full description','',['some photos']),
        new Project('./assets/projects/okay1.png','Portfolio site',['Angular','Tailwind','Typescript'],'This site is also made with angular, compared with tailwind making it look great and responsive. Includes form, backend necessary to send email without exposing login credentials, dialogs, and everything You can see','full description','',['some photos']),
        new Project('./assets/projects/controler.png','GameHere',['Angular','Bootstrap','Typescript','Sockets'],'Gaming site containing tik-tak-toe, snake and many more...','full description','https://tmspanel.grinddev.pl',['somephotos']),
        new Project('./assets/projects/github.png','Many more...',['JavaScript','Python','Django','MySQL','C++','Angular','Bootstrap','Typescript'],'Many more made in time of my engineering studies. Check them out on my github!','full description','https://tmspanel.grinddev.pl',['somephotos']),
    ]
    getProjectsList(){
        return this.projects.slice()
    }
    getSingleProject(title:string){
        return this.projects.find(x => x.projectTitle === title)
    }
}