export class LanguageSelector {
  public flag:string;
  public name:string;
  public alt: string;
  public isSelected: boolean;

  constructor(flag: string, name: string, alt:string, isSelected:boolean) {
    this.flag = flag;
    this.name = name;
    this.alt = alt;
    this.isSelected = isSelected;
  }
}
