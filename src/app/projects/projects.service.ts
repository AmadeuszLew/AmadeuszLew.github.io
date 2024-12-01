import {Project} from "./models/project.model";
import {ProjectDetail} from "./models/projectDetail.model";

export class ProjectsService {
    private projects: Project[] = [
        new Project('./assets/projects/pogon_mogilno.png', 'TMS- team management system', ['Vue 2', 'Vuetify', 'Axios'], 'Made by a team of four people. Two of us are responsible for the front end, and 2 for the back-end. Unfortunately, my front-end friend had a covid at the time of creating the beta version which is now live I managed to make almost all the work, leaving him only to do "teams view" which is 1 of 8', 'full description', 'https://tmspanel.grinddev.pl', ['somephotos']),
        new Project('./assets/projects/lenny_logo.png', 'Sneakers shop', ['UI/UX', 'Angular', 'Bootstrap 5', 'Typescript', 'Firebase', 'RxJS'], "Simple shop developed for small sellers focused on limited sneakers. In beta version clients are able to log in, and add items to the cart. Designed to look great both on small devices, and computers.", 'full description', '', ['some photos']),
        new Project('./assets/projects/stockx.png', 'Stockx Fix Extension', ['JavaScript', 'Tampermonkey', 'DOM manipulation'], 'Stockx is a middleman in selling sneakers. The bug on their site accrues for over a year, so I have decided to fix it myself. Listed prices of users without VATID are divided on backend by 1.05, and this change does not reflect on the user side. So when someone lists something for 100$, the real price he listed is 95$, and the user has no idea of it to the point he sells the item.', 'full description', '', ['some photos']),
        new Project('./assets/projects/okay1.png', 'Portfolio site', ['Angular', 'Tailwind', 'Typescript'], 'This site is also made with angular, thanks to tailwind it is responsive and clear. The code is kept clean and maintainable.', 'full description', '', ['some photos']),
        new Project('./assets/projects/controler.png', 'GameHere', ['Angular', 'Bootstrap', 'Typescript', 'Sockets'], 'Gaming site containing tik-tak-toe, snake and many more...', 'full description', '', ['somephotos']),
        new Project('./assets/projects/github.png', 'Many more', ['JavaScript', 'Python', 'Django', 'MySQL', 'C++', 'Angular', 'Bootstrap', 'Typescript'], 'Many more were made in the time of my engineering studies. Check them out on my GitHub!', 'full description', '', ['somephotos']),
    ]
    private projectsDetail: ProjectDetail[] = [
        new ProjectDetail('TMS- team management system', [
            {featurePhoto: '../assets/projects/TMS/architecture.png', featureTitle: 'Architecture', featureDescription: 'The UI page is a combination of Vue and Vuetify that provides high user-side responsiveness and readability. The application server side consists of several modules. The SQLite database is responsible for data storage. Communication with the database takes place thanks to the Django framework. We are using the rest framework to share and receive data between the user interface and the application server.'},
            {featurePhoto: '../assets/projects/TMS/dashboard.png', featureTitle: 'Coach dashboard', featureDescription: "View containing last 3 matches of team on the left. Presence on last trainings on the right. Table with detail info about every players score in selected match on the bottom. This view is made to help coaches quickly check status of last few days."},
            {featurePhoto: '../assets/projects/TMS/matches.png', featureTitle: 'Matches view', featureDescription: "Main view, containing all the matches. User can add match in 3 steps by adding event->team_games->players score. Error handling contains every user input fault. In case of failure, user can add missing pieces in the detail match view. The winning team is colored green. Adding and deleting trainings is similar to doing it on players and coaches view, to keep it simple for the user."},
            {featurePhoto: '../assets/projects/TMS/single_match.png', featureTitle: 'Single match view', featureDescription: "Detail match view. Two sortable by every parameter tables with score of players are editable by the user. Search field is working with every parameter. In case of user input fail this is the place where he can add missing data. Every input has rules."},
            {featurePhoto: '../assets/projects/TMS/calendar.png', featureTitle: 'Calendar view', featureDescription: "Calendar view to easily search upcoming events. It contains trainings, matches. User can add just an event for example 'team meeting'. User can change view for day-4days-week-month with month as default."},
            {featurePhoto: '../assets/projects/TMS/knowledgebase.png', featureTitle: 'Knowledge base', featureDescription: "Place where users can reach for professional knowledge"},
            {featurePhoto: '../assets/projects/TMS/single_knowledgebase.png', featureTitle: 'Knowledge base article', featureDescription: "Single article view, with more details"},
            {featurePhoto: '../assets/projects/TMS/players.png', featureTitle: 'Players list', featureDescription: "View with table listing all of the players. Search working with: name, last name, gender and email. Table is sortable with every given parameter. Fallowing F rule, button to edit and add button is available at the right top corner."},
            {featurePhoto: '../assets/projects/TMS/players_add.png', featureTitle: 'Adding and editing Players', featureDescription: "Adding players have different ruleset depending on player's team. If it's our player, user have to input all data. If not, we need to add just first and last name + gender. Edit button adds an edit row to the table, enabling user to delete/edit players."},
            {featurePhoto: '../assets/projects/TMS/trainings.png', featureTitle: 'Trainings view', featureDescription: "View containing all trainings. User is enabled to add and delete trainings by clicking in the right-up corner. Sorting by querying was added on beta 0.2 and live version will not reflect screen. Clicking in individual training will route to single training view."},
            {featurePhoto: '../assets/projects/TMS/trainings_add.png', featureTitle: 'Adding and editing trainings', featureDescription: "Adding and deleting trainings is similar to doing it on players and coaches view, to keep it simple for the user."},
            {featurePhoto: '../assets/projects/TMS/single_training.png', featureTitle: 'Single training view', featureDescription: "Here users can send notifications to players participating in selected training and view more details about the training."},
        ]),
        new ProjectDetail('Sneakers shop', [
            {featurePhoto: '../assets/projects/SneakerShop/main_page.png', featureTitle: 'Main page', featureDescription: 'I have tried to keep it as simple as possible. Fallowing F/Z rule, cart and logging page is on the right-up corner. Left up corner logo is also link to homepage. Product models are made to be sortable by main category and model.'},
            {featurePhoto: '../assets/projects/SneakerShop/product_page.png', featureTitle: 'Product page', featureDescription: 'Product page is made as simple as it is possible, for the best readability.'},
            {featurePhoto: '../assets/projects/SneakerShop/login.png', featureTitle: 'Login page', featureDescription: 'Users can login and register using email and password.'},
            {featurePhoto: '../assets/projects/SneakerShop/login_firebase.png', featureTitle: 'Firebase accounts', featureDescription: 'Firebase is responsible for managing and storing users credentials. Site has auto-login to do not lost state on refresh and auto-logout when token expires.'},
            {featurePhoto: '../assets/projects/SneakerShop/cart_no_item.png', featureTitle: 'Empty cart page', featureDescription: 'Empty cart page is made to be user friendly, contains only 2 items cart with animated bubbles (pure css), and button encouraging user to get back to main page and add something.'},
            {featurePhoto: '../assets/projects/SneakerShop/cart_item.png', featureTitle: 'Item cart page', featureDescription: 'Cart page will contain sum of items, animations on delete, and many more.'},
            {featurePhoto: '../assets/projects/SneakerShop/features.png', featureTitle: 'Features', featureDescription: 'Product models are made to be sortable by main category and model so it can be sortable. I have also implemented viewing information about size availability.'},
            {featurePhoto: '../assets/projects/SneakerShop/main_page_sm.png', featureTitle: 'Mobile main page', featureDescription: 'Main page for the mobile have navbar moved from the top to bottom to be easier and more mobile-friendly.'},
            {featurePhoto: '../assets/projects/SneakerShop/main_page_sm_sidebar.png', featureTitle: 'Mobile main page sidebar', featureDescription: 'Sidebar buttons are moved to menu on the left, activated by the hamburger-icon.'},
            {featurePhoto: '../assets/projects/more.jpg', featureTitle: 'More coming...', featureDescription: 'I am still working on this project. Items now are stored just in local storage, there is no user data. The goal is to store items on firebase, connect users to database, and add payment. UI is not finished also, it needs to be polished off.'},
        ]),
        new ProjectDetail('Stockx Fix Extension', [
            {featurePhoto: '../assets/projects/stockx/all_items_without.png', featureTitle: 'List view without extension', featureDescription: 'Image showing how stockx looks without extension. Plugin makes sure there is no top warning reminding user to ship items, and if there is, it deletes it. In his place plugin inserts his navigation with two buttons enabling user to check prices.'},
            {featurePhoto: '../assets/projects/stockx/all_items.png', featureTitle: 'Check all items button', featureDescription: 'Function activated by clicking left button on top navbar. Highlights items where user price is not really the lowest'},
            {featurePhoto: '../assets/projects/stockx/item_without.png', featureTitle: 'Item view without extension', featureDescription: 'Image showing how stockx looks without extension. Plugin after user clicking to check adds two fields.'},
            {featurePhoto: '../assets/projects/stockx/item_with.png', featureTitle: 'Item view after using extension', featureDescription: 'Fields added by plugin calculate real price that user should have inserted to get the lowest ask, and displays it on the DOM. Another field is calculating user payout, so he can immediately know is it even worth it to place an ask.'}
        ]),
        new ProjectDetail('Portfolio site', [
            {featurePhoto: '../assets/projects/ten.png', featureTitle: 'Well...', featureDescription: 'You are already on this site :D. Feel free to contact me with your feedback.'},
            {featurePhoto: '../assets/projects/more.jpg', featureTitle: 'More coming', featureDescription: 'I am still working on this website. I want to make it dual-language using pipe, add more animations to make it more user-friendly, work on mobile versions of images, make it more visible on Google, and more... '}
        ]),
        new ProjectDetail('GameHere', [
            {featurePhoto: '../assets/sorry.jpg', featureTitle: 'Sorry', featureDescription: 'This website does not exit for now :C'},
        ]),
        new ProjectDetail('Many more', [
            {featurePhoto: '../assets/man_icon.png', featureTitle: 'Visit my GitHub :D', featureDescription: 'click the link to get to my GitHub.'},
        ]),
    ];

    getProjectsList(): Project[] {
        return this.projects.slice()
    }

    getSingleProject(id: string) {
        return this.projectsDetail.find(x => x.projectTitle === id)
    }
}
