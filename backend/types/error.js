const ERROR = {
  USERNAME_EXISTED: 'auth/register/username_existed',

  USERNAME_NOT_EXISTED: 'auth/login/username_not_existed',
  PASSWORD_NOT_MATCHED: 'auth/login/password_not_matched',
  INVALID_TOKEN: 'auth/invalid_token',
  AUTH_REQUIRED: 'auth/required',

  INTERNAL_ERROR: 'internal_error',
};

module.exports = ERROR;
