import {exec, spawn} from 'child_process';
import {format} from 'string-template'

// Test availability:
// 'jhead -V'

// Rename files:
// 'jhead -n%Y%m%d-%H%M%S file1.jpg file2.jpg ...'

// Other notes:
// * upon success jhead will write 'file1.jpg --> 20150101-140101.jpg'
//   to stdout
// * on error jhead will write to stderr
// * exit code will be 0 if at least one file succedes
// * when no date is present in EXIF data, jhead renames the file
//   using file date and will write to stdout
//     'file 'exif_nodate.jpg' contains no exif date stamp.  Using file date
//     file2.jpg --> 20150101-140101.jpg'

const extension = 'jpg';

export default class {
  constructor(logger) {
    this.logger = logger || console;
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
