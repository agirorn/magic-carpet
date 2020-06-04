const mod = require('../');


describe('Magic Carpet', () => {
  describe('functions', () => {
    const FUNCTION_NAMES = 'command,exit,node,run,runAndExit,script'.split(',');
    FUNCTION_NAMES.forEach((name) => {
      describe(`.${name}()`, () => {
        it('is a function', () => {
          expect(mod[name]).toEqual(jasmine.any(Function));
        });
      });
    });
  });

  describe('.shellArguments()', () => {
    const NO_ARGS = ['node', 'script.js'];

    describe('no arguments', () => {
      it('return an empty string', () => {
        expect(mod.shellArguments(NO_ARGS)).toEqual('');
      });
    });

    describe('single arg', () => {
      it('is returnd withe an empty string in front', () => {
        expect(mod.shellArguments([...NO_ARGS, 'ARG1'])).toEqual(' ARG1');
      });
    });
  });

  describe('.node()', () => {
    it('adds note bin and command line arguments', () => {
      expect(mod.node('test.js', () => ' --ARG')).toEqual('node test.js --ARG');
    });
  });
});
