/* eslint-disable */

import express from 'express'; // Import the Express module
import controllerRouting from './routes/index'; // Import the routes from the index file

const app = express(); // Initialize an Express application instance

// Define the port number for the server to listen on
const port = 1245;

controllerRouting(app);

app.listen(port, () => {
    // console.log(`Server running on port ${port}`);
});

// Export the Express application instance for use in other modules
export default app;