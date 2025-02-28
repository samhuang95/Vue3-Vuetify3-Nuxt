export interface EmailLoginRequest {
  email: string;
  password: string;
}

export interface EmailLoginResponse {
  message: string;
  data: EmailLoginResponseData;
}

interface EmailLoginResponseData {
  username: string;
  email: string;
  company: string;
  onboarded: boolean;
  role: string;
  first_name: string;
  last_name: string;
}
