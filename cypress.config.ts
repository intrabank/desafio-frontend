import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		fixturesFolder: 'src/__tests__/cypress/fixtures',
		screenshotsFolder: 'src/__tests__/cypress/screenshots',
		videosFolder: 'src/__tests__/cypress/videos',
		downloadsFolder: 'src/__tests__/cypress/downloads',
		supportFile: 'src/__tests__/cypress/support/e2e.ts',
		specPattern: '**/*.e2e.ts',
	},
});
