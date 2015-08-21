import {exec} from 'child_process';

let CR2_TOOL_TEST = '/* put command here */';

export const extension = 'cr2';

export function testTool() {
  // evaluate if tool can be executed
  return new Promise((resolve, reject) => {
    exec(CR2_TOOL_TEST, error => {
      if (error) {
        reject();
      }
      resolve();
    });
  });
}
