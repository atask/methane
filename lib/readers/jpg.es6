import {exec, spawn} from 'child_process';
import {format} from 'string-template'

// Test availability
// 'jhead -V'

// Rename files
// 'jhead -n%YYYY%MM%dd-%HH%MM%SS file1.jpg file2.jpg ...'

const extension = 'jpg';

export default class {
  constructor(logger) {
    this.logger = logger;
    this.extension = extension;
  }

  // evaluate if jhead can be executed
  isAvailable() {
    return new Promise((resolve, reject) => {
      var command = 'jhead -V';
      exec(command, error => {
        if (error) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  // rename files using pattern
  rename(filePaths, format, renameCallback) {
    return new Promise((resolve, reject) => {
      // build options array
      var options = ['-n' + format];
      options = options.concat(filePaths);
      var jhead = spawn('jhead', options);
      jhead.stdout.on('data', data => console.log(data));
      jhead.on('close', code => resolve(code));
    });
  }
}
