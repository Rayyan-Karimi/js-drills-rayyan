/**
 * Test your code with different corner cases like passing no args, 
 * passing empty args, passing args which are not supported.
*/

import emailExtractor from '../Solutions/1-Email_Extraction.mjs'

test('checks emailExtractor with a valid input', () => {
    expect(emailExtractor('someInput')).toBe('expectedOutput');
});

test('checks emailExtractor with invalid input', () => {
    expect(emailExtractor(null)).toBe('expectedErrorHandling');
});