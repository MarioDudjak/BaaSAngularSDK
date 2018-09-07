
export class UsersEndpoints {
  public static API_ENDPOINT='http://localhost:50224/';
  public static register = UsersEndpoints.API_ENDPOINT + "account/Register";
  public static login = UsersEndpoints.API_ENDPOINT + "account/Login";
  public static logout = UsersEndpoints.API_ENDPOINT + "account/Logout";
  public static token = 'http://localhost:50224/token';
  public static setPassword = UsersEndpoints.API_ENDPOINT + "account/SetPassword";
  public static changePassword = UsersEndpoints.API_ENDPOINT + "account/ChangePassword";
}
