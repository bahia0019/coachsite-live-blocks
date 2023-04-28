import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Coachsite Live Blocks – hello from the saved content!',
				'coachsite-live-blocks'
			) }
		</p>
	);
}
