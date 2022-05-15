import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        //vi is the spy, on Jest is just jest.fn();
        //Arrange
        const logger = vi.fn();

        //logger.mockImplementationOnce(() => {});

        //Act
        generateReportData(logger);

        //Assert
        expect(logger).toBeCalled();
    });
});