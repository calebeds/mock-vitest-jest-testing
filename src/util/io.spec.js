import { it, expect } from 'vitest';
import writeData from './io.js';

it('should execute the writeFIle method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    
    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});