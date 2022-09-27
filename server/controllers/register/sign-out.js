const signOut = (req, res, next) => {
    res.clearCookie('token').send({ message: 'redirect' });
  };
  
  module.exports = { signOut };