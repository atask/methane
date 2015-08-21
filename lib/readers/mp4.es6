import {exec} from 'child_process';

let MP4_TOOL_TEST = '/* put command here */';

export const extension = 'mp4';

export function testTool() {
  // evaluate if tool can be executed
  return new Promise((resolve, reject) => {
    exec(MP4_TOOL_TEST, error => {
      if (error) {
        reject();
      }
      resolve();
    });
  });
}
