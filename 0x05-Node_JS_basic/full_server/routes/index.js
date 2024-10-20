/* eslint-disable */

import { Router } from 'express'; // Import express router
import AppController from '../controllers/AppController'; // Import AppController class
import StudentsController from '../controllers/StudentsController'; // Import StudentsController class

const router = Router(); // Initialize a new router instance

// Route for the homepage, handled by AppController
router.get('/', AppController.getHomepage);

// Route for listing all students, handled by StudentsController
router.get('/students', StudentsController.getAllStudents);

// Route for listing students by major, handled by StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router; // Export the router instance