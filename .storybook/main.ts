import type { StorybookConfig } from '@storybook/html-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
	"stories": [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
	],
	"framework": "@storybook/html-vite",
	refs: {
		'vanilla-toppings': {
			title: 'Vanilla Toppings',
			url: 'https://doubleedesign.github.io/vanilla-toppings/', 
		},
		'decorators': {
			title: 'Storybook Decorators',
			url: 'https://doubleedesign.github.io/storybook-assorted-decorators/',
		},
		// Don't show stories from the Storybook Design System in the sidebar
		'@storybook/design-system': { disable: true }
	},
};
export default config;