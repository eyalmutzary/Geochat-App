export class User{
    constructor(
      public _id: string = '',
      public fullname: string = '',
      public email: string = '',
      public password: string = '',
      public region: string = '',
      public tokens: string[] = [],
      public avatar: string = ''
    ) {}
}