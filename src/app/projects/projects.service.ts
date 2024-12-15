import {Project} from "./models/project.model";
import {ProjectDetail} from "./models/projectDetail.model";

export class ProjectsService {
  private projects: Project[] = [
    new Project('./assets/projects/pogon_mogilno.png', 'TMS- team management system', ['Vue 2', 'Vuetify', 'Axios'], 'projects.TMS-team-management-system.description', 'full description', 'https://tmspanel.grinddev.pl', ['somephotos']),
    new Project('./assets/projects/lenny_logo.png', 'Sneakers shop', ['UI/UX', 'Angular', 'Bootstrap 5', 'Typescript', 'Firebase', 'RxJS'], "projects.sneakers-shop.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/stockx.png', 'Stockx Fix Extension', ['JavaScript', 'Tampermonkey', 'DOM manipulation'], "projects.stockx-fix-extension.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/okay1.png', 'Portfolio site', ['Angular', 'Tailwind', 'Typescript'], "projects.portfolio-site.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/cdi.png', 'Comarch Digital Insurance', ['Private'], "projects.comarch-digital-insurance.description", 'full description', 'https://www.comarch.pl/finanse/ubezpieczenia/comarch-digital-insurance/', ['somephotos']),
    new Project('./assets/projects/github.png', 'Many more', ['JavaScript', 'Python', 'Django', 'MySQL', 'C++', 'Angular', 'Bootstrap', 'Typescript'], "projects.many-more.description", 'full description', 'https://github.com/AmadeuszLew', ['somephotos']),
  ]
  private projectsDetail: ProjectDetail[] = [
    new ProjectDetail('TMS- team management system', [
      { featurePhoto: '../assets/projects/TMS/architecture.png', featureTitle: `projectDetail.TMS.architecture.title`, featureDescription: `projectDetail.TMS.architecture.description` },
      { featurePhoto: '../assets/projects/TMS/dashboard.png', featureTitle: `projectDetail.TMS.dashboard.title`, featureDescription: `projectDetail.TMS.dashboard.description` },
      { featurePhoto: '../assets/projects/TMS/matches.png', featureTitle: `projectDetail.TMS.matches.title`, featureDescription: `projectDetail.TMS.matches.description` },
      { featurePhoto: '../assets/projects/TMS/single_match.png', featureTitle: `projectDetail.TMS.singleMatch.title`, featureDescription: `projectDetail.TMS.singleMatch.description` },
      { featurePhoto: '../assets/projects/TMS/calendar.png', featureTitle: `projectDetail.TMS.calendar.title`, featureDescription: `projectDetail.TMS.calendar.description` },
      { featurePhoto: '../assets/projects/TMS/knowledgebase.png', featureTitle: `projectDetail.TMS.knowledgebase.title`, featureDescription: `projectDetail.TMS.knowledgebase.description` },
      { featurePhoto: '../assets/projects/TMS/single_knowledgebase.png', featureTitle: `projectDetail.TMS.singleKnowledgebase.title`, featureDescription: `projectDetail.TMS.singleKnowledgebase.description` },
      { featurePhoto: '../assets/projects/TMS/players.png', featureTitle: `projectDetail.TMS.players.title`, featureDescription: `projectDetail.TMS.players.description` },
      { featurePhoto: '../assets/projects/TMS/players_add.png', featureTitle: `projectDetail.TMS.playersAdd.title`, featureDescription: `projectDetail.TMS.playersAdd.description` },
      { featurePhoto: '../assets/projects/TMS/trainings.png', featureTitle: `projectDetail.TMS.trainings.title`, featureDescription: `projectDetail.TMS.trainings.description` },
      { featurePhoto: '../assets/projects/TMS/trainings_add.png', featureTitle: `projectDetail.TMS.trainingsAdd.title`, featureDescription: `projectDetail.TMS.trainingsAdd.description` },
      { featurePhoto: '../assets/projects/TMS/single_training.png', featureTitle: `projectDetail.TMS.singleTraining.title`, featureDescription: `projectDetail.TMS.singleTraining.description` },
    ]),
    new ProjectDetail('Sneakers shop', [
      { featurePhoto: '../assets/projects/SneakerShop/main_page.png', featureTitle: `projectDetail.sneakerShop.mainPage.title`, featureDescription: `projectDetail.sneakerShop.mainPage.description` },
      { featurePhoto: '../assets/projects/SneakerShop/product_page.png', featureTitle: `projectDetail.sneakerShop.productPage.title`, featureDescription: `projectDetail.sneakerShop.productPage.description` },
      { featurePhoto: '../assets/projects/SneakerShop/login.png', featureTitle: `projectDetail.sneakerShop.login.title`, featureDescription: `projectDetail.sneakerShop.login.description` },
      { featurePhoto: '../assets/projects/SneakerShop/login_firebase.png', featureTitle: `projectDetail.sneakerShop.loginFirebase.title`, featureDescription: `projectDetail.sneakerShop.loginFirebase.description` },
      { featurePhoto: '../assets/projects/SneakerShop/cart_no_item.png', featureTitle: `projectDetail.sneakerShop.cartNoItem.title`, featureDescription: `projectDetail.sneakerShop.cartNoItem.description` },
      { featurePhoto: '../assets/projects/SneakerShop/cart_item.png', featureTitle: `projectDetail.sneakerShop.cartItem.title`, featureDescription: `projectDetail.sneakerShop.cartItem.description` },
      { featurePhoto: '../assets/projects/SneakerShop/features.png', featureTitle: `projectDetail.sneakerShop.features.title`, featureDescription: `projectDetail.sneakerShop.features.description` },
      { featurePhoto: '../assets/projects/SneakerShop/main_page_sm.png', featureTitle: `projectDetail.sneakerShop.mainPageSm.title`, featureDescription: `projectDetail.sneakerShop.mainPageSm.description` },
      { featurePhoto: '../assets/projects/SneakerShop/main_page_sm_sidebar.png', featureTitle: `projectDetail.sneakerShop.mainPageSmSidebar.title`, featureDescription: `projectDetail.sneakerShop.mainPageSmSidebar.description` },
      { featurePhoto: '../assets/projects/SneakerShop/features.png', featureTitle: `projectDetail.sneakerShop.more.title`, featureDescription: `projectDetail.sneakerShop.more.description` },
    ]),
    new ProjectDetail('Stockx Fix Extension', [
      { featurePhoto: '../assets/projects/stockx/all_items_without.png', featureTitle: `projectDetail.stockx.allItemsWithout.title`, featureDescription: `projectDetail.stockx.allItemsWithout.description` },
      { featurePhoto: '../assets/projects/stockx/all_items.png', featureTitle: `projectDetail.stockx.allItems.title`, featureDescription: `projectDetail.stockx.allItems.description` },
      { featurePhoto: '../assets/projects/stockx/item_without.png', featureTitle: `projectDetail.stockx.itemWithout.title`, featureDescription: `projectDetail.stockx.itemWithout.description` },
      { featurePhoto: '../assets/projects/stockx/item_with.png', featureTitle: `projectDetail.stockx.itemWith.title`, featureDescription: `projectDetail.stockx.itemWith.description` }
    ]),
    new ProjectDetail('Portfolio site', [
      { featurePhoto: '../assets/projects/ten.png', featureTitle: `projectDetail.portfolio.good.title`, featureDescription: `projectDetail.portfolio.good.description` },
      { featurePhoto: '../assets/projects/more.jpg', featureTitle: `projectDetail.portfolio.more.title`, featureDescription: `projectDetail.portfolio.more.description` }
    ]),
    new ProjectDetail('Comarch Digital Insurance', [
      { featurePhoto: '../assets/projects/cdi/cdi_1.png', featureTitle: `projectDetail.comarch.cdi1.title`, featureDescription: `projectDetail.comarch.cdi1.description` },
      { featurePhoto: '../assets/projects/cdi/cdi_2.png', featureTitle: `projectDetail.comarch.cdi2.title`, featureDescription: `projectDetail.comarch.cdi2.description` },
      { featurePhoto: '../assets/projects/cdi/cdi_3.png', featureTitle: `projectDetail.comarch.cdi3.title`, featureDescription: `projectDetail.comarch.cdi3.description` },
      { featurePhoto: '../assets/projects/cdi/cdi_4.png', featureTitle: `projectDetail.comarch.cdi4.title`, featureDescription: `projectDetail.comarch.cdi4.description` },
      { featurePhoto: '../assets/projects/cdi/cdi_5.png', featureTitle: `projectDetail.comarch.cdi5.title`, featureDescription: `projectDetail.comarch.cdi5.description` },
    ]),
    new ProjectDetail('Many more', [
      { featurePhoto: '../assets/man_icon.png', featureTitle: `projectDetail.manyMore.github.title`, featureDescription: `projectDetail.manyMore.github.description` },
    ])
  ];



  getProjectsList(): Project[] {
    return this.projects.slice()
  }

  getSingleProject(id: string) {
    return this.projectsDetail.find(x => x.projectTitle === id)
  }
}
