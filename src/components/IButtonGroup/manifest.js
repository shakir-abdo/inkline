module.exports = {
	name: 'button-group',
	slots: [
		{
			name: 'default',
			description: 'Slot for default button group content',
			type: []
		}
	],
	props: [
		{
			name: 'vertical',
			description: 'Display the button group with vertical orientation',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'block',
			description: 'Display the button group as a block, spanning the full container width',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'disabled',
			description: 'The disabled state of the button group',
			type: [
				'Boolean'
			],
			default: 'false'
		},
		{
			name: 'size',
			description: 'The size variant of the button group',
			type: [
				'sm',
				'md',
				'lg'
			],
			default: 'md'
		}
	]
};
