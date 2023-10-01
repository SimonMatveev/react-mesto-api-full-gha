class AuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.name = 'AuthError';
  }
}

module.exports = AuthError;
