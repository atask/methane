import jpgReader from './readers/jpg';
import cr2Reader from './readers/cr2';

let Readers = [JpgReader, Cr2Reader],
    readers =  Readers.map(Reader => new Reader());

export class Methane {
  constructor(logger) {
    this.logger = logger;
  }

  testReaders() {
    return Promise
      .all(readers.map(reader => reader.isAvailable()))
      .then(availableResults => {
        var availableReaders = {};
        readers
          .filter((reader, index) => availableResults[index])
          .forEach(reader => {
            availableReaders[reader.extension] = reader;
          });
      });
  }
}
