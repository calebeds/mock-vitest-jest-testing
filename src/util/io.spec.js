vi.mock('path', () => { //We could especify a implementation to the mock to check out some behavior
    return {
        default: { //We're using the default export
            join: (...args) => { //a specific method from path: join
                return args[args.length - 1]; //return the last argument which is the filename
            } 
        }
    };
});//It seems that vitest sometimes has to put mocks before the imports too

import { it, expect, vi } from 'vitest';
import writeData from './io.js';
import { promises as fs } from 'fs';

vi.mock('fs');//It will replace all functions inside this module with spy functions | With jest you need to move it before the imports


it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);//Because there is fs.writeFile inside of it, it will expect later that it will be called, but with mocks, so it won't execute the third-party code, but only our code
    
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    //expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFileName, testData); //The arguments order doesn't matter
});