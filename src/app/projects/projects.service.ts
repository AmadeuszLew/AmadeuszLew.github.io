import { Feature } from "./feature.model";
import { Project } from "./project.model";
import { ProjectDetail } from "./projectDetail.model";

export class ProjectsService {
    private projects:Project[]=[
        new Project('./assets/projects/pogon_mogilno.png','TMS- team management system',['Vue 2','Vuetify','Axios'],'Made by team of four people. Two of us are responsible for the front end, and 2 for the back-end. Unfortunately, my front-end friend had a covid at the time of creating the beta version which is now live I managed to make almost all the work, leaving him only to do "teams view" which is 1 of 8','full description','https://tmspanel.grinddev.pl',['somephotos']),
        new Project('./assets/projects/lenny_logo.png','Sneakers shop',['UI/UX','Angular','Bootstrap 5','Typescript','Firebase','RxJS'],"Simple shop developed for small sellers, focused on limited sneakers. In beta version client's are able to login, add items to cart. Designed to look great both on small devices, and computers.",'full description','',['some photos']),
        new Project('./assets/projects/stockx.png','Stockx Fix Extension',['JavaScript','Tampermonkey','DOM manipulation'],'Stockx is a middleman in selling sneakers. The bug on their site accures for over a year, so I have decided to fix it myself. Listed prices of users without VATID are divided on backend by 1.05, and this change does not not reflect on the user side. So when someone list something for 100$, real price he listed is 95$, and user have no idea of it to the point he sells the item.','full description','',['some photos']),
        new Project('./assets/projects/okay1.png','Portfolio site',['Angular','Tailwind','Typescript'],'This site is also made with angular, with tailwind making it look great and responsive. Includes form, backend necessary to send email without exposing login credentials, dialogs, and everything You can see','full description','',['some photos']),
        new Project('./assets/projects/controler.png','GameHere',['Angular','Bootstrap','Typescript','Sockets'],'Gaming site containing tik-tak-toe, snake and many more...','full description','',['somephotos']),
        new Project('./assets/projects/github.png','Many more',['JavaScript','Python','Django','MySQL','C++','Angular','Bootstrap','Typescript'],'Many more made in time of my engineering studies. Check them out on my github!','full description','',['somephotos']),
    ]
    private projectsDetail:ProjectDetail[]=[
        new ProjectDetail('TMS- team management system',[
            new Feature('../assets/projects/TMS/architecture.png','Architecture','The UI page is a combination of Vue and Vuetify that provide high user-side responsiveness and readability. The application server side consists of several modules. The SQLite database is responsible for data storage.Communication with the database takes place thanks to the Django framework.We are using the rest framework to share and receive data between the user interface and the application server.'),
            new Feature('../assets/projects/TMS/dashboard.png','Coach dashboard',"View containing last 3 matches of team on the left. Presence on last trainings on the right. Table with detail info about every players score in selected match on the bottom. This view is made to help coaches quickly check status of last few days."),
            new Feature('../assets/projects/TMS/matches.png','Matches view',"Main view, containing all the matches. User can add match in 3 steps by adding event->team_games->players score. Error handling contains every user input fault. In case of failure, user can add missing pieces in the detail match view. Winning team is colored green. Adding and deleting trainings is similar to doing it on players and coaches view, to keep it simple for the user "),
            new Feature('../assets/projects/TMS/single_match.png','Single match view',"Detail match view. Two sortable by every parameter tables with score of players are editable by the user. Search field is working with every parameter. In case of user input fail this is the place when he can add missing data. Every input has rules"),
            new Feature('../assets/projects/TMS/calendar.png','Calendar view',"Calendar view to easily search upcoming events. It contains trainings, matches. User can add just an event for example 'team meeting'. User can change view for day-4days-week-month with month as default."),
            new Feature('../assets/projects/TMS/knowledgebase.png','Knowledge base',"Place where users can reach for professional knowledge"),
            new Feature('../assets/projects/TMS/single_knowledgebase.png','Knowledge base article',"Single article view, with more details"),
            new Feature('../assets/projects/TMS/players.png','Players list',"View with table listing all of the players. Search working with: name,last name, gender, email. Table is sortable with every given parameter. Fallowing F rule, button to edit and add button is available at the right top corner"),
            new Feature('../assets/projects/TMS/players_add.png','Adding and editing Players',"Adding players have different ruleset depending on player's team. If it's our player, user have to input all data. If not, we need to add just first and last name + gender. Edit button adds a edit row to the table, enabling user to delete/edit players"),
            new Feature('../assets/projects/TMS/trainings.png','Trainings view',"View containing all trainings. User is enable to add and delete trainings by clicking in the right up corner. Sorting by querying was added on beta 0.2 and live version will not reflect screen. Clicking in individual training will route to single training view"),
            new Feature('../assets/projects/TMS/trainings_add.png','Adding and editing trainings',"Adding and deleting trainings is similar to doing it on players and coaches view, to keep it simple for the user"),
            new Feature('../assets/projects/TMS/single_training.png','Single training view',"Here user can send notifications to players participating in selected training and view more details about the training"),
        ]),
        new ProjectDetail('Sneakers shop',[
            new Feature('../assets/projects/SneakerShop/main_page.png','Main page','I have tried to keep it as simple as possible. Fallowing F/Z rule, cart and logging page is on the right up corner. Left up corner logo is also link to homepage. Product models are made to be sortable by main category and model '),
            new Feature('../assets/projects/SneakerShop/product_page.png','Product page','Product page is made as simple as it is possible, for the biggest readability'),
            new Feature('../assets/projects/SneakerShop/login.png','Login page','Users can login and register using email and password'),
            new Feature('../assets/projects/SneakerShop/login_firebase.png','Firebase accounts','Firebase is responsible for managing and storing users credentials. Site has auto-login to do not lost state on refresh and auto-logout when token expires'),
            new Feature('../assets/projects/SneakerShop/cart_no_item.png','Empty cart page','Empty cart page is made to be user friendly, contains only 2 items cart with animated bubbles (pure css), and button encouraging user to get back to main page and add something'),
            new Feature('../assets/projects/SneakerShop/cart_item.png','Item cart page','Cart page will contain sum of items, animations on delete, and many more'),
            new Feature('../assets/projects/SneakerShop/features.png','Features','Product models are made to be sortable by main category and model so it can be sortable. I have also implemented viewing information about size availability.'),
            new Feature('../assets/projects/SneakerShop/main_page_sm.png','Mobile main page','Main page for the mobile have navbar moved from the top to bottom to be easier and more mobile friendly.'),
            new Feature('../assets/projects/SneakerShop/main_page_sm_sidebar.png','Mobile main page sidebar','Sidebar buttons are moved to menu on the left, activated by the hamburger-icon'),
            new Feature('../assets/projects/more.jpg','More coming...','I am still working on this project. Items now are stored just in local storage, there is no user data. Goal is to store items on firebase, connect users to database, and add payment. UI is not finished also, it need to be polished off'),
        ]),
        new ProjectDetail('Stockx Fix Extension',[
            new Feature('../assets/projects/stockx/all_items_without.png','List view without extension','Image showing how stockx looks without extension. Plugin makes sure there is no top warning reminding user to ship items, and if there is, it deletes it. In his place plugin inserts his navigation with two buttons enabling user to check prices'),
            new Feature('../assets/projects/stockx/all_items.png','Check all items button','Function activated by clicking left button on top navbar. Highlight items where user price is not really the lowest'),
            new Feature('../assets/projects/stockx/item_without.png','Item view without extension','Image showing how stockx looks without extension. Plugin after user clicking to check adds two fields.'),
            new Feature('../assets/projects/stockx/item_with.png','Item view after using extension','Fields added by plugin calculates real price that user should have inserted to get lowest ask, and displays it on the DOM. Another field is calculating user payout, so he can immediately know is it even worth it to place ask')
        ]),
        new ProjectDetail('Portfolio site',[
            new Feature('../assets/projects/ten.png','Well...','You are already on this site :D. Feel free to contact me with your feedback'),
            new Feature('../assets/projects/more.jpg','More coming','I am still working on this site. I want to make it dual-language using pipe, add more animations to make it more user friendly, work on mobile version of images, make it more visible on Google, and more... ')
        ]),
        new ProjectDetail('GameHere',[
            new Feature('../assets/sorry.jpg','Sorry','This site does not exit for now :C'),
        ]),
        new ProjectDetail('Many more',[
            new Feature('../assets/man_icon.png','Visit my github :D','click the link to get to my github'),
        ]),
    ];
    
    getProjectsList(){
        return this.projects.slice()
    }
    getSingleProject(id:string){
        return this.projectsDetail.find(x => x.projectTitle === id)
    }
}