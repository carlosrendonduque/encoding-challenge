// src/utils/encodeUtils.test.js
import { encodeBlock } from './encodeUtils';

// Test cases based on the provided examples
describe('encodeBlock', () => {
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
