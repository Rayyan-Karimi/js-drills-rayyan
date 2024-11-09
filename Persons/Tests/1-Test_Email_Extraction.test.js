/**
 * Test your code with different corner cases like passing no args, 
 * passing empty args, passing args which are not supported.
*/
import { expect } from 'chai';
import emailExtractor from '../Solutions/1-Email_Extraction.js'
import arrayOfObjects from '../persons.js'

describe('emailExtractor tests', () => {
    it('should return valid emails for valid input', () => {
        const result = emailExtractor(arrayOfObjects);
        expect(result).to.eql(['emails']);
    });

    it('should handle default cases gracefully', () => {
        const result = emailExtractor(null);
        expect(result).to.equal("Please provide a valid array of objects which contains the 'email' property");
    })
})
