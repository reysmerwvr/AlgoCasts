const { regexVar } = require('./index');

test('regexVar function exists', () => {
    expect(typeof regexVar).toEqual('function');
});

describe('Regex Var', () => {
    test('regex expresion', () => {  
      expect('a'.match(regexVar())).toBeTruthy();
      expect('e'.match(regexVar())).toBeTruthy();
      expect('i'.match(regexVar())).toBeTruthy();
      expect('o'.match(regexVar())).toBeTruthy();
      expect('u'.match(regexVar())).toBeTruthy();
      expect('b'.match(regexVar())).toBeFalsy();
      expect('aba'.match(regexVar())).toBeTruthy();
      expect('ebe'.match(regexVar())).toBeTruthy();
      expect('ibi'.match(regexVar())).toBeTruthy();
      expect('obo'.match(regexVar())).toBeTruthy();
      expect('ubu'.match(regexVar())).toBeTruthy();
      expect('bbb'.match(regexVar())).toBeFalsy();
      expect('abbbcccddda'.match(regexVar())).toBeTruthy();
      expect('abbbcccddde'.match(regexVar())).toBeFalsy();
    });
  });