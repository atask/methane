import winston from 'winston';
import parseArgs from 'minimist';
import format from 'string-template';
import Methane from './lib/methane';

let args = parseArgs(argv[2], {
  strings: 'f',
  default: {
    f: '%Y%m%d-%H%M%S'
  }
});

let methane = new Methane(winston);

// lets consider only the first option for now
var target = args._[0];

if (!target) {
  // show fancy usage...
  // methane
  //   .testReaders()
  //  .then...
} else {
  winston.debug(format('starting methane.rename [target: {target}, f: {fOpt}]'), {
    target: target,
    fOpt: args.f
  })
  methane
    .rename(target, args.f)
    .then(() => {
      winston.info('Task complete');
    })
}
