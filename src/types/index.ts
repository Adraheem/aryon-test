export interface INavItem {
  href: string;
  title: string;
  icon: string;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
