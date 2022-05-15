import { vi } from 'vitest';

export const promises = {
    writeFile: vi.fn((path, data) => {
        return new Promise((resolve, reject) => {
            resolve();
        });
    })
}//When vi.mock in the io.spec.js file be called, then this code will be implemented