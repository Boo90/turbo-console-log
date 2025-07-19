import { functionParameterLine } from '@/debug-message/js/JSDebugMessage/logMessageLine/helpers';
import { makeTextDocument } from '@/jest-tests/mocks/helpers';
import testCases from './cases';

describe('functionParameterLine – each layout style', () => {
  for (const test of testCases) {
    it(`should return correct insertion line for: ${test.name}`, () => {
      const doc = makeTextDocument(test.lines);
      const result = functionParameterLine(
        doc,
        test.selectionLine,
        test.variableName,
      );
      expect(result).toBe(test.expected);
    });
  }
});
