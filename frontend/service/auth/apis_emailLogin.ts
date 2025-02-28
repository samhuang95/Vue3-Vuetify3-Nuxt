import { request } from '../api';
import type {
  EmailLoginRequest,
  EmailLoginResponse,
} from '../../types/auth/user.type';

export function emailLogin_api(reqMsg: EmailLoginRequest) {
  return request<EmailLoginResponse, EmailLoginRequest>({
    url: '/api/login',
    method: 'post',
    data: reqMsg,
  });
}
