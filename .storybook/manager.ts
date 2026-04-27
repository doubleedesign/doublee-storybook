import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import './manager.css';

addons.setConfig({
	theme: {
		...themes.light,
		brandTitle: '',
		brandImage: null, // TODO: Create logo
		fontBase: "'Neue Montreal', 'Neue Helvetica', 'Helvetica', Arial, sans-serif",
		fontCode: "'Fira Code', ui-monospace",
	},
	sidebar: {
		filters: {
			patterns: (item) => {
				if(item.title.startsWith('Foundations')) {
					return false;
				}

				if(item.title.startsWith('Atoms')) {
					return false;
				}

				if(item.title === 'Introduction') {
					return false;
				}

				return true;
			},
		},
	},
});