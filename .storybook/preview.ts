import type { Preview } from '@storybook/html-vite';
import { themes } from 'storybook/theming';
import './preview.css';

const preview: Preview = {
	parameters: {
		docs: {
			theme: {
				...themes.light,
				fontBase: "'Neue Montreal', 'Neue Helvetica', 'Helvetica', Arial, sans-serif",
				fontCode: "'Fira Code', ui-monospace",
			},
		}
	},
};

export default preview;