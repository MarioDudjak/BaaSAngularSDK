
export interface ISetPassword {
  NewPassword: string,
  ConfirmPassword: string
};

export interface IChangePassword extends ISetPassword {
  OldPassword: string,
}

export interface IPasswordMessage {
  Succeeded: boolean,
  Errors: string[]
}


