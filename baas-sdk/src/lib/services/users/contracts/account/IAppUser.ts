export interface IRole {
  userId: string,
  roleId: string
};


export interface IAppUser {
  id: string,
  email: string,
  userName: string,
  passwordHash: string,
  Roles : IRole[],
  phoneNumber: string
};
