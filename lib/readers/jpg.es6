import {exec} from 'child_process';

const JPG_AVAILABLE = 'jhead -V';
const JPG_RENAME = `jhead -n{format} {filePaths}`;
const extension = 'jpg';

export default class {
  constructor(logger) {
    this.logger = logger;
    this.extension = extension;
  }

  // evaluate if jhead can be executed
  isAvailable() {
    return new Promise((resolve, reject) => {
      exec(JPG_AVAILABLE, error => {
        if (error) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  // rename files using pattern
  rename(filePaths, format) {
    
  }
}
