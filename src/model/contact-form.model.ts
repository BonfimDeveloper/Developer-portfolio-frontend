export class ContactFormModel {
  from_name: string;
  from_email: string;
  from_enterprise: string;
  message: string;

  constructor(
    from_name: string = '',
    from_email: string = '',
    from_enterprise: string = '',
    message: string = ''
  ) {
    this.from_name = from_name;
    this.from_email = from_email;
    this.from_enterprise = from_enterprise;
    this.message = message;
  }
}
