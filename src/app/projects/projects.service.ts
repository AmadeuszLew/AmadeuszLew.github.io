import {Project} from "./models/project.model";
import {ProjectDetail} from "./models/projectDetail.model";
import {ProjectImage} from "./models/feature.model";

const screenshot = (path: string, width: number, height: number): ProjectImage => ({
  thumb: `assets/${path}.thumb.webp`,
  full: `assets/${path}.webp`,
  width,
  height,
});

export class ProjectsService {
  private projects: Project[] = [
    new Project('./assets/projects/startwithhabit.png', 'startwithhabit', 'projects.startwithhabit.title', ['Angular', 'TypeScript', 'SSG', 'ngx-translate', 'SCSS', 'Vitest', 'Playwright', 'Docker', 'Nginx', 'Caddy', 'GitHub Actions'], 'projects.startwithhabit.description', 'full description', 'https://startwithhabit.com', ['somephotos'], true),
    new Project('./assets/projects/pogon_mogilno.png', 'TMS', 'projects.TMS-team-management-system.title', ['Vue 2', 'Vuetify', 'Axios'], 'projects.TMS-team-management-system.description', 'full description', 'https://tmspanel.grinddev.pl', ['somephotos']),
    new Project('./assets/projects/lenny_logo.png', 'sneakers-shop', "projects.sneakers-shop.title", ['UI/UX', 'Angular', 'Bootstrap 5', 'Typescript', 'Firebase', 'RxJS'], "projects.sneakers-shop.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/stockx.png', 'stockx-fix-extension', "projects.stockx-fix-extension.title", ['JavaScript', 'Tampermonkey', 'DOM manipulation'], "projects.stockx-fix-extension.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/okay1.png', 'portfolio', "projects.portfolio-site.title", ['Angular', 'Tailwind', 'Typescript'], "projects.portfolio-site.description", 'full description', '', ['some photos']),
    new Project('./assets/projects/cdi.png', 'comarch-digital-insurance', "projects.comarch-digital-insurance.title", ['Private'], "projects.comarch-digital-insurance.description", 'full description', 'https://www.comarch.pl/finanse/ubezpieczenia/comarch-digital-insurance/', ['somephotos']),
    new Project('./assets/projects/github.png', 'github', "projects.many-more.title", ['JavaScript', 'Python', 'Django', 'MySQL', 'C++', 'Angular', 'Bootstrap', 'Typescript'], "projects.many-more.description", 'full description', 'https://github.com/AmadeuszLew', ['somephotos']),
  ]
  private projectsDetail: ProjectDetail[] = [
    new ProjectDetail('projects.startwithhabit.title', 'startwithhabit', [
      { featurePhoto: screenshot('projects/startwithhabit/main_page_en', 1186, 1159), featureTitle: `projectDetail.startwithhabit.home.title`, featureDescription: `projectDetail.startwithhabit.home.description` },
      { featurePhoto: screenshot('projects/startwithhabit/running', 766, 1268), featureTitle: `projectDetail.startwithhabit.program.title`, featureDescription: `projectDetail.startwithhabit.program.description` },
      { featurePhoto: screenshot('projects/startwithhabit/test', 766, 1268), featureTitle: `projectDetail.startwithhabit.entryTest.title`, featureDescription: `projectDetail.startwithhabit.entryTest.description` },
      { featurePhoto: screenshot('projects/startwithhabit/week_2', 1036, 1258), featureTitle: `projectDetail.startwithhabit.week.title`, featureDescription: `projectDetail.startwithhabit.week.description` },
      { featurePhoto: screenshot('projects/startwithhabit/5k', 698, 1046), featureTitle: `projectDetail.startwithhabit.planSwitch.title`, featureDescription: `projectDetail.startwithhabit.planSwitch.description` },
      { featurePhoto: screenshot('projects/startwithhabit/cycling_zones', 704, 1262), featureTitle: `projectDetail.startwithhabit.guides.title`, featureDescription: `projectDetail.startwithhabit.guides.description` },
      { featurePhoto: screenshot('projects/startwithhabit/triathlon', 691, 1194), featureTitle: `projectDetail.startwithhabit.triathlon.title`, featureDescription: `projectDetail.startwithhabit.triathlon.description` },
      { featurePhoto: screenshot('projects/startwithhabit/about', 702, 1230), featureTitle: `projectDetail.startwithhabit.sources.title`, featureDescription: `projectDetail.startwithhabit.sources.description` },
      { featurePhoto: screenshot('projects/startwithhabit/language_picker', 186, 429), featureTitle: `projectDetail.startwithhabit.languages.title`, featureDescription: `projectDetail.startwithhabit.languages.description` },
      { featurePhoto: screenshot('projects/startwithhabit/main_page_mobile', 386, 1158), featureTitle: `projectDetail.startwithhabit.mobile.title`, featureDescription: `projectDetail.startwithhabit.mobile.description` },
      { featurePhoto: screenshot('projects/startwithhabit/mobile_progress', 373, 869), featureTitle: `projectDetail.startwithhabit.progress.title`, featureDescription: `projectDetail.startwithhabit.progress.description` },
    ]),
    new ProjectDetail('projects.TMS-team-management-system.title', "TMS", [
      { featurePhoto: screenshot('projects/TMS/architecture', 616, 235), featureTitle: `projectDetail.TMS.architecture.title`, featureDescription: `projectDetail.TMS.architecture.description` },
      { featurePhoto: screenshot('projects/TMS/dashboard', 1858, 939), featureTitle: `projectDetail.TMS.dashboard.title`, featureDescription: `projectDetail.TMS.dashboard.description` },
      { featurePhoto: screenshot('projects/TMS/matches', 1877, 935), featureTitle: `projectDetail.TMS.matches.title`, featureDescription: `projectDetail.TMS.matches.description` },
      { featurePhoto: screenshot('projects/TMS/single_match', 1884, 943), featureTitle: `projectDetail.TMS.singleMatch.title`, featureDescription: `projectDetail.TMS.singleMatch.description` },
      { featurePhoto: screenshot('projects/TMS/calendar', 1878, 941), featureTitle: `projectDetail.TMS.calendar.title`, featureDescription: `projectDetail.TMS.calendar.description` },
      { featurePhoto: screenshot('projects/TMS/knowledgebase', 1882, 935), featureTitle: `projectDetail.TMS.knowledgebase.title`, featureDescription: `projectDetail.TMS.knowledgebase.description` },
      { featurePhoto: screenshot('projects/TMS/single_knowledgebase', 1808, 639), featureTitle: `projectDetail.TMS.singleKnowledgebase.title`, featureDescription: `projectDetail.TMS.singleKnowledgebase.description` },
      { featurePhoto: screenshot('projects/TMS/players', 1866, 832), featureTitle: `projectDetail.TMS.players.title`, featureDescription: `projectDetail.TMS.players.description` },
      { featurePhoto: screenshot('projects/TMS/players_add', 1920, 1080), featureTitle: `projectDetail.TMS.playersAdd.title`, featureDescription: `projectDetail.TMS.playersAdd.description` },
      { featurePhoto: screenshot('projects/TMS/trainings', 1881, 948), featureTitle: `projectDetail.TMS.trainings.title`, featureDescription: `projectDetail.TMS.trainings.description` },
      { featurePhoto: screenshot('projects/TMS/trainings_add', 1500, 1200), featureTitle: `projectDetail.TMS.trainingsAdd.title`, featureDescription: `projectDetail.TMS.trainingsAdd.description` },
      { featurePhoto: screenshot('projects/TMS/single_training', 1881, 310), featureTitle: `projectDetail.TMS.singleTraining.title`, featureDescription: `projectDetail.TMS.singleTraining.description` },
    ]),
    new ProjectDetail('projects.sneakers-shop.title', 'sneakers-shop', [
      { featurePhoto: screenshot('projects/SneakerShop/main_page', 1886, 930), featureTitle: `projectDetail.sneakerShop.mainPage.title`, featureDescription: `projectDetail.sneakerShop.mainPage.description` },
      { featurePhoto: screenshot('projects/SneakerShop/product_page', 1858, 788), featureTitle: `projectDetail.sneakerShop.productPage.title`, featureDescription: `projectDetail.sneakerShop.productPage.description` },
      { featurePhoto: screenshot('projects/SneakerShop/login', 1903, 934), featureTitle: `projectDetail.sneakerShop.login.title`, featureDescription: `projectDetail.sneakerShop.login.description` },
      { featurePhoto: screenshot('projects/SneakerShop/login_firebase', 1880, 826), featureTitle: `projectDetail.sneakerShop.loginFirebase.title`, featureDescription: `projectDetail.sneakerShop.loginFirebase.description` },
      { featurePhoto: screenshot('projects/SneakerShop/cart_no_item', 1880, 937), featureTitle: `projectDetail.sneakerShop.cartNoItem.title`, featureDescription: `projectDetail.sneakerShop.cartNoItem.description` },
      { featurePhoto: screenshot('projects/SneakerShop/cart_item', 1858, 788), featureTitle: `projectDetail.sneakerShop.cartItem.title`, featureDescription: `projectDetail.sneakerShop.cartItem.description` },
      { featurePhoto: screenshot('projects/SneakerShop/features', 624, 398), featureTitle: `projectDetail.sneakerShop.features.title`, featureDescription: `projectDetail.sneakerShop.features.description` },
      { featurePhoto: screenshot('projects/SneakerShop/main_page_sm', 992, 919), featureTitle: `projectDetail.sneakerShop.mainPageSm.title`, featureDescription: `projectDetail.sneakerShop.mainPageSm.description` },
      { featurePhoto: screenshot('projects/SneakerShop/main_page_sm_sidebar', 979, 942), featureTitle: `projectDetail.sneakerShop.mainPageSmSidebar.title`, featureDescription: `projectDetail.sneakerShop.mainPageSmSidebar.description` },
      { featurePhoto: screenshot('projects/SneakerShop/features', 624, 398), featureTitle: `projectDetail.sneakerShop.more.title`, featureDescription: `projectDetail.sneakerShop.more.description` },
    ]),
    new ProjectDetail('projects.stockx-fix-extension.title', 'stockx-fix-extension',[
      { featurePhoto: screenshot('projects/stockx/all_items_without', 1898, 964), featureTitle: `projectDetail.stockx.allItemsWithout.title`, featureDescription: `projectDetail.stockx.allItemsWithout.description` },
      { featurePhoto: screenshot('projects/stockx/all_items', 1881, 731), featureTitle: `projectDetail.stockx.allItems.title`, featureDescription: `projectDetail.stockx.allItems.description` },
      { featurePhoto: screenshot('projects/stockx/item_without', 1871, 949), featureTitle: `projectDetail.stockx.itemWithout.title`, featureDescription: `projectDetail.stockx.itemWithout.description` },
      { featurePhoto: screenshot('projects/stockx/item_with', 1900, 889), featureTitle: `projectDetail.stockx.itemWith.title`, featureDescription: `projectDetail.stockx.itemWith.description` }
    ]),
    new ProjectDetail('projects.portfolio-site.title', 'portfolio', [
      { featurePhoto: screenshot('projects/ten', 600, 600), featureTitle: `projectDetail.portfolio.good.title`, featureDescription: `projectDetail.portfolio.good.description` },
      { featurePhoto: screenshot('projects/more', 1588, 595), featureTitle: `projectDetail.portfolio.more.title`, featureDescription: `projectDetail.portfolio.more.description` }
    ]),
    new ProjectDetail('projects.comarch-digital-insurance.title', 'comarch-digital-insurance', [
      { featurePhoto: screenshot('projects/cdi/cdi_1', 798, 553), featureTitle: `projectDetail.comarch.cdi1.title`, featureDescription: `projectDetail.comarch.cdi1.description` },
      { featurePhoto: screenshot('projects/cdi/cdi_2', 656, 403), featureTitle: `projectDetail.comarch.cdi2.title`, featureDescription: `projectDetail.comarch.cdi2.description` },
      { featurePhoto: screenshot('projects/cdi/cdi_3', 697, 490), featureTitle: `projectDetail.comarch.cdi3.title`, featureDescription: `projectDetail.comarch.cdi3.description` },
      { featurePhoto: screenshot('projects/cdi/cdi_4', 616, 230), featureTitle: `projectDetail.comarch.cdi4.title`, featureDescription: `projectDetail.comarch.cdi4.description` },
      { featurePhoto: screenshot('projects/cdi/cdi_5', 670, 575), featureTitle: `projectDetail.comarch.cdi5.title`, featureDescription: `projectDetail.comarch.cdi5.description` },
    ]),
    new ProjectDetail('projects.many-more.title', 'github', [
      { featurePhoto: screenshot('man_icon', 512, 512), featureTitle: `projectDetail.manyMore.github.title`, featureDescription: `projectDetail.manyMore.github.description` },
    ])
  ];



  getProjectsList(): Project[] {
    return this.projects.slice()
  }

  getSingleProject(id: string): ProjectDetail | undefined {
    return this.projectsDetail.find((x: ProjectDetail) => x.projectPage === id);
  }

  getProjectSummary(id: string): Project | undefined {
    return this.projects.find((x: Project) => x.projectPage === id);
  }
}
