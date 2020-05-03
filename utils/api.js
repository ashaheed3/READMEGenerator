const axios = require("axios");
const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);
    


const api = {
  getUser(username) {

    

      axios
        .get(`https://api.github.com/users/${username}`,{
          headers: {
            authorization: `token 28a23795e243f69a7e167b577da7b651baa7bdab`
          }
        })
        .then(function(data) {
          console.log(data)
            const questions = 
              `## Questions
              Have a question? Shoot me an email
              Email: [${data.data.email}](mailto:${data.data.email})\n![Image of User](${data.data.avatar_url})`;

              try{
                appendFileAsync("README.md", questions);
              }catch(err) {
                console.log(err);
              }

        });

      }

    }
module.exports = api;

