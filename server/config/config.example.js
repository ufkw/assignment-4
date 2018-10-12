//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://user1:userpass4@ds249798.mlab.com:49798/kufdatabase'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '97f39d76eb6c461e8a3f4e88dd4fa08d' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};