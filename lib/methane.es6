import glob from 'glob';
import jpgReader from './readers/jpg';
import cr2Reader from './readers/cr2';

let Readers = [JpgReader, Cr2Reader],

export default class {
  constructor(logger) {
    this.logger = logger || console;
    this.readers =  Readers.map(Reader => new Reader(logger));
  }

  testReaders() {
    return Promise
      .all(this.readers.map(reader => reader.isAvailable()))
      .then(availableResults => {
        this.readers.forEach((reader, index) =>
          reader.available = availableResult[index]
        );
      );
  }

  rename(globPattern, outFormat) {
    let globSearch = new Promise((resolve, reject) => {
      glob(globPattern, (err, matches) => {
        if (err) {
          reject(err);
        }
        resolve(matches);
      });
    });

    return Promise.all([testReaders, globSearch])
      .then(results => {
        var [readers, matches] = results;
        return Promise.all(readers
          .filter(reader => reader.available)
          .map(reader => reader.rename(matches, outFormat)));
      });
  }
}
