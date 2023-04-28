import edit from './edit';
import save from './save';

export const name = 'core/hero';

export const settings = {
	title: 'Hero Image',
	description: 'Adds a large hero image at the top of the page, with optionns for logo and text',
	category: 'text',
	icon: 'align-center',
	edit,
	save,
	supports: {
		align: ['full'],
		alignWide: true,
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		image: {
			url: {
				type: "string",
				source: "attribute",
				attribute: "src",
			},
			alt: {
				type: "string",
				source: "attribute",
				attribute: "alt",
			},
		},
		logo: {
			url: {
				type: "string",
				source: "attribute",
				attribute: "src",
			},
			alt: {
				type: "string",
				source: "attribute",
				attribute: "alt",
			},
			styles: {
				left: {
					type: "string",
					source: "attribute",
				},
				top: {
					type: "string",
					source: "attribute",
				}
			}
		},
		displayLogo: {
			type: "boolean",
		},
		logoSize:{
			type:"number",
			default:"20",
		},
		logoPositionH: {
			type: "number",
			default:"10"
		},
		logoPositionV: {
			type: "number",
			default:"10"
		},
		heroTitle: {
			type: 'string',
		},
		displayTitle: {
			type: "boolean",
		},
		centerTitle: {
			type: "boolean",
			default: "true"
		},
		titlePositionH: {
			type: "number",
			default:"20",
		},
		titlePositionV: {
			type: "number",
			default: "70",
		},
		overlay: {
			type: "boolean",
		},
		overlayHeight: {
			type: "number",
			default:"50"
		},
		overlayOpacity:{
			type:"number",
			default:"50",
		},
		colorValue: {
			type: "string",
			default: ''
		},
		gradientValue: {
			type: "string",
			default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
		},
	},
};
