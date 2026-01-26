import { describe, it, expect } from 'vitest';
import { capitalize, camelCase, kebabCase, truncate, reverse } from './index';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
    });

    it('should handle kebab-case', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    it('should handle snake_case', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
    });
  });

  describe('kebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
    });

    it('should handle spaces', () => {
      expect(kebabCase('hello world')).toBe('hello-world');
    });

    it('should handle snake_case', () => {
      expect(kebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should handle exact length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should handle palindromes', () => {
      expect(reverse('racecar')).toBe('racecar');
    });

    it('should handle empty strings', () => {
      expect(reverse('')).toBe('');
    });
  });
});
