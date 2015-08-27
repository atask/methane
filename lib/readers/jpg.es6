import {exec} from 'child_process';

const JPG_TOOL_TEST = 'jhead -V';
const extension = 'jpg';

export default class {
  constructor(logger) {
    this.logger = logger;
    this.extension = extension;
  }

  // evaluate if jhead can be executed
  isAvailable() {
    return new Promise((resolve, reject) => {
      exec(JPG_TOOL_TEST, error => {
        if (error) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  // rename files using pattern
  rename(glob, format) {
    
  }
}
