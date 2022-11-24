import nextJest from 'next/jest';

const createJestConfig = nextJest({
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	testPathIgnorePatterns: ['<rootDir>/src/__tests__/cypress'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(customJestConfig);
