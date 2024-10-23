/* eslint-disable */

const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // Read the file content asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(Error(err));
        return;
      }
      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(','));

      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;

      // Resolve the promise with the resulting object
      resolve(fields);

        // return fields;
    });
  });
}

export default readDatabase;