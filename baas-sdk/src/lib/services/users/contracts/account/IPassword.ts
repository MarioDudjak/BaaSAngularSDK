
export interface ISetPassword {
  newPassword: string,
  confirmPassword: string
};

export interface IChangePassword extends ISetPassword {
  oldPassword: string,
}

export interface IPasswordMessage {
  succeeded: boolean,
  errors: string[]
}


