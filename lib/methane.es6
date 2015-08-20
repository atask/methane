import * as jpgReader from './readers/jpg';
import * as cr2Reader from './readers/cr2';

let readers = [jpgReader, cr2Reader];

let logger;

let methane = function(readers) {
  logger.log('inside methane body');
};

export default function(loggr) {
  logger = loggr || console;
  logger.log('Inside methane init');
  return methane;
};
