/* eslint-disable */

class AppController {
  // Static method to handle the homepage route
  static getHomepage(request, response) {
    // Respond with a 200 status code and a message
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;