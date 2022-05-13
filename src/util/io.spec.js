import { it, expect, vi } from 'vitest';
import writeData from './io.js';
import {promises as fs} from 'fs';

vi.mock('fs');//It will replace all functions inside this module with spy functions | With jest you need to move it before the imports

it('should execute the writeFIle method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);//Because there is fs.writeFile inside of it, it will expect later that it will be called, but with mocks, so it won't execute the third-party code, but only our code
    
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    expect(fs.writeFile).toBeCalled();
});