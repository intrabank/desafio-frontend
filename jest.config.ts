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
	moduleNameMapper: {
		'^@/components(.*)$': '<rootDir>/src/components$1',
		'^@/pages(.*)$': '<rootDir>/src/pages$1',
		'^@/utils(.*)$': '<rootDir>/src/utils$1',
		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
	},
};

export default createJestConfig(customJestConfig);
