export class ContactPost {
    public company:string;
    public email:string;
    public message: string;

    constructor(message: string, email: string, company:string) {
      this.message = message;
      this.email = email;
      this.company = company;
    }
  }