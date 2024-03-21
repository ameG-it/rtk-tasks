export interface initialStateLogin {
  loginUser: null | {
    authen: {
      username: string;
      password: string;
    };
    isLoginView: boolean;
    profile: {
      id: number;
      username: string;
    };
  };
}
