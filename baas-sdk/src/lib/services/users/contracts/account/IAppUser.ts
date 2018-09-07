export interface IRole {
  UserId: string,
  RoleId: string
};


export interface IAppUser {
  Id: string,
  Email: string,
  UserName: string,
  PasswordHash: string,
  Roles : IRole[],
  PhoneNumber: string
};
