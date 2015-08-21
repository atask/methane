import {exec} from 'child_process';

let JPG_TOOL_TEST = 'jhead -V';

export const extension = 'jpg';

export function testTool() {
  // evaluate if jhead can be executed
  return new Promise((resolve, reject) => {
    exec(JPG_TOOL_TEST, error => {
      if (error) {
        reject();
      }
      resolve();
    });
  });
}
