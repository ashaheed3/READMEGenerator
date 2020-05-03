const axios = require("axios");
const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);
    


const api = {
  getUser(username) {

    

      axios
        .get(`https://api.github.com/users/${username}`)
        .then(function(data) {
            const questions = 
              `## Questions\nHave a question? Shoot me an email\nEmail: [${data.email}](mailto:${data.email})\n![Image of User](${data.avatar})`;

              try{
                appendFileAsync("README.md", questions);
              }catch(err) {
                console.log(err);
              }

        });

      }

    }
module.exports = api;

