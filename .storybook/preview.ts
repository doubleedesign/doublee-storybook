import type { Preview } from '@storybook/html-vite';
import { themes } from 'storybook/theming';
import { doubleeTheme } from '@doubleedesign/doublee-site-style';
import './preview.css';

const mergedTheme = {
	...themes.light,
	...doubleeTheme
};

const preview: Preview = {
	parameters: {
		docs: {
			theme: mergedTheme,
		}
	},
};

export default preview;