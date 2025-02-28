export function emailLogin_msg(_emailAddress: string, _password: string) {
  var msg = {
    email: _emailAddress,
    password: _password,
  };

  return msg;
}
