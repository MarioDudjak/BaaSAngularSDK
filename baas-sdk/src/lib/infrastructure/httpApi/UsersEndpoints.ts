
export class UsersEndpoints {
  public static API_ENDPOINT='http://127.0.0.1:50224/users/';
  public static register = UsersEndpoints.API_ENDPOINT + "Register";
  public static login = UsersEndpoints.API_ENDPOINT + "Login";
  public static logout = UsersEndpoints.API_ENDPOINT + "Logout";
  public static token = 'http://127.0.0.1:50224/token';
  public static setPassword = UsersEndpoints.API_ENDPOINT + "SetPassword";
  public static changePassword = UsersEndpoints.API_ENDPOINT + "ChangePassword";
}
