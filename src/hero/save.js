import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import { MediaUpload, MediaUploadCheck, InspectorControls, RichText } from '@wordpress/block-editor';


export default function save(props) {
	const blockProps = useBlockProps.save();

	const {
		attributes,
		setAttributes
	} = props;

	const { image, logo, displayLogo, logoSize, logoPositionH, logoPositionV, heroTitle, displayTitle, centerTitle, titlePositionH, titlePositionV, overlayHeight, logoCorrectLeft, overlay, overlayOpacity, colorValue, gradientValue  } = attributes

	
	return (
		<div {...blockProps}>

			<img className="bg-image" src={image ? image.url : "http://backfromburnout.coachsite-live.local/wp-content/uploads/sites/2/2021/08/beachfromabove.jpg"} />

			{displayLogo &&
				<img className="logo" style={{"width": logoSize + "%", "left": logoPositionH + "%", "top": logoPositionV + "%", translateY:logoCorrectLeft + "px", zIndex:"20"}} src={logo ? logo.url : ""} />
			}
			{displayTitle &&
				<div className="hero-title" style={centerTitle ? { "left": logoPositionH + "%", "top": titlePositionV + "%", zIndex:"100"} : { "left": titlePositionH + "%", "top": titlePositionV + "%", zIndex:"100"}} >
					<RichText.Content tagName="h2" value={heroTitle} />
				</div>
			}

			{overlay &&
				colorValue &&
				<div class="hero-overlay" style={{"height": overlayHeight + "%", "background": colorValue, "opacity": overlayOpacity +"%", "position": "absolute", "bottom": "0", "z-index": "10", "width": "100%", }}></div>
			}
			{overlay &&
				gradientValue &&
				<div class="hero-overlay" style={{"height": overlayHeight + "%", "background": gradientValue, "opacity": overlayOpacity +"%", "position": "absolute", "bottom": "0", "z-index": "10", "width": "100%", }}></div>
			}
		</div>
	);
}