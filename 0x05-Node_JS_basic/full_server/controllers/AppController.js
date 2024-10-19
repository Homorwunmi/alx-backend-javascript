/* eslint-disable */

// Define and export the AppController class
export default class AppController {
    // Static method to handle the homepage route
    static getHomepage(req, response) {
      // Respond with a 200 status code and a message
      response.status(200).send('Hello Holberton School!');
    }
  }