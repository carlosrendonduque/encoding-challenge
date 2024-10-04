// src/utils/encodeUtils.test.js
import { encodeBlock, encode, decode, encodeSwitcher } from './encodeUtils';

// Part 1: Test cases based on the provided examples
describe('Part 1: encodeBlock', () => {
  test('should encode "foo" correctly', () => {
    expect(encodeBlock('foo')).toBe(124807030);
  });

  test('should encode " foo" correctly', () => {
    expect(encodeBlock(' foo')).toBe(250662636);
  });

  test('should encode "foot" correctly', () => {
    expect(encodeBlock('foot')).toBe(267939702);
  });

  test('should encode "BIRD" correctly', () => {
    expect(encodeBlock('BIRD')).toBe(251930706);
  });

  test('should encode "...." correctly', () => {
    expect(encodeBlock('....')).toBe(15794160);
  });

  test('should encode "^^^^" correctly', () => {
    expect(encodeBlock('^^^^')).toBe(252706800);
  });

  test('should encode "Woot" correctly', () => {
    expect(encodeBlock('Woot')).toBe(266956663);
  });

  test('should encode "no" correctly', () => {
    expect(encodeBlock('no')).toBe(53490482);
  });
});

// Part 2: New encoding/decoding logic tests
describe('Part 2: encode and decode', () => {
  test('should encode and decode "tacocat"', () => {
    const input = 'tacocat';
    const expectedEncoded = [267487694, 125043731];
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(encoded).toEqual(expectedEncoded);
    expect(decoded).toBe(input);
  });

  test('should encode and decode "never odd or even"', () => {
    const input = 'never odd or even';
    const expectedEncoded = [
      267657050, 233917524, 234374596, 250875466, 17830160,
    ];
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(encoded).toEqual(expectedEncoded);
    expect(decoded).toBe(input);
  });

  test('should encode and decode "lager, sir, is regal"', () => {
    const input = 'lager, sir, is regal';
    const expectedEncoded = [
      267394382, 167322264, 66212897, 200937635, 267422503,
    ];
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(encoded).toEqual(expectedEncoded);
    expect(decoded).toBe(input);
  });

  test('should encode and decode "go hang a salami, I\'m a lasagna hog"', () => {
    const input = "go hang a salami, I'm a lasagna hog";
    const expectedEncoded = [
      200319795, 133178981, 234094669, 267441422, 78666124, 99619077, 267653454,
      133178165, 124794470,
    ];
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(encoded).toEqual(expectedEncoded);
    expect(decoded).toBe(input);
  });

  test('should encode and decode "egad, a base tone denotes a bad age"', () => {
    const input = 'egad, a base tone denotes a bad age';
    const expectedEncoded = [
      267389735, 82841860, 267651166, 250793668, 233835785, 267665210, 99680277,
      133170194, 124782119,
    ];
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(encoded).toEqual(expectedEncoded);
    expect(decoded).toBe(input);
  });

  // Switch mechanism should be able to handle both Part 1 and Part 2
  test('Switch mechanism should correctly switch between Part 1 and Part 2', () => {
    const input = 'foo';
    // Part 1 (using encodeBlock)
    expect(encodeSwitcher(input, 1)).toBe(124807030);

    // Part 2 (using encode/decode)
    const part2Encoded = encodeSwitcher(input, 2);
    const decoded = decode(part2Encoded);
    expect(decoded).toBe(input);
  });
});
