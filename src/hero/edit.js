import { __ } from '@wordpress/i18n';
import './editor.scss';
import { Button, PanelBody, SelectControl, RadioControl, RangeControl, ToggleControl } from '@wordpress/components';
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, RichText, __experimentalColorGradientControl as ColorGradientControl } from '@wordpress/block-editor';
import { Fragment } from "react";
import { withState } from '@wordpress/compose';


export default function edit(props) {
	const {
		element: {
			useState,
		},
	} = wp;

	const blockProps = useBlockProps({
		className: 'csl-block-hero',
		'data-id': 'csl-block-hero'
	});

	const {
		attributes,
		setAttributes,
	} = props;

	const { image, logo, displayLogo, logoSize, logoPositionH, logoPositionV, heroTitle, displayTitle, centerTitle, titlePositionH, titlePositionV, overlayHeight, logoCorrectLeft, overlay, overlayOpacity, colorValue, gradientValue } = attributes



	const selectImage = (image) => {
		setAttributes({ image });
	};
	const selectLogo = (logo) => {
		setAttributes({ logo });
	};
	const changeLogoSize = (logoSize) => {
		setAttributes({ logoSize });
	};
	const changeLogoPositionH = (logoPositionH) => {
		setAttributes({ logoPositionH });
		// logoCorrectH()
	};
	const changeLogoPositionV = (logoPositionV) => {
		setAttributes({ logoPositionV });
	};
	// const logoCorrectH = (logoCorrectLeft) => {
	// 	logoCorrectLeft = ( 50 > logoPositionH ) ? 100 : "" 
	// }
	const updateCenterTitle = (centerTitle) => {
		setAttributes({ centerTitle });
	};
	const changeTitlePositionH = (titlePositionH) => {
		setAttributes({ titlePositionH });
	};
	const changeTitlePositionV = (titlePositionV) => {
		setAttributes({ titlePositionV });
	};
	const changeoverlayHeight = (overlayHeight) => {
		setAttributes({overlayHeight});
	};	
	const changeOverlayOpacity = (overlayOpacity) => {
		setAttributes({overlayOpacity});

	};	

	return (
		<div {...blockProps}>
			<InspectorControls>

				{/* Logo options */}
				<PanelBody title={"Overlay"}>

					<ToggleControl
						label="Use Overlay?"
						help="Options for darkening the background image. Helpful for making text more readable. Choose a Solid or Gradient overlay, and you can select a predesigned one, or make your own."
						checked={ !!overlay }
						onChange={ () => setAttributes( {overlay: !overlay}) }
					/>
						{ overlay &&
							<ColorGradientControl
								colorValue={ attributes.colorValue }
								gradientValue={ attributes.gradientValue }
								colors={ [
									{ name: 'red', color: '#f00' },
									{ name: 'white', color: '#fff' },
									{ name: 'blue', color: '#00f' },
								] }
								gradients={[
									{
										name: 'Black to clear',
										gradient:
											'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
										slug: 'black-to-clear',
									},
									{
										name: 'Blue to Red',
										gradient:
											'linear-gradient(180deg, rgba(255,44,0,0.5256477591036415) 0%, rgba(32,0,134,1) 100%)',
										slug: 'blue-to-red',
									},
									{
										name: 'Teal to Purple',
										gradient:
											'linear-gradient(0deg, rgba(50,149,144,1) 0%, rgba(155,51,159,1) 60%)',
										slug: 'teal-to-purple',
									},
								]}
								label={ __("Choose a color or a gradient") }
								onColorChange={ (newValue) => setAttributes({ colorValue: newValue }) }
								onGradientChange={ (newValue) => setAttributes({ gradientValue: newValue }) }
							/>
						}
						{ overlay && 
							<RangeControl
								label="Overlay Height"
								value={overlayHeight ? overlayHeight : ""}
								onChange={ ( overlayHeight ) => changeoverlayHeight( overlayHeight ) }
								min={0}
								max={100}
								initialPosition={50}
							/>	
						} 
						{ overlay && 
							<RangeControl
								label="Overlay Opacity"
								value={overlayOpacity ? overlayOpacity : ""}
								onChange={ ( overlayOpacity ) => changeOverlayOpacity( overlayOpacity ) }
								min={0}
								max={100}
								initialPosition={50}
							/>
						} 

				</PanelBody>

				{/* Logo options */}
				<PanelBody title={"Logo"}>
					<ToggleControl
						label="Display logo?"
						help={
							displayLogo
								? 'Logo is displayed.'
								: 'Logo is not displayed.'
						}
						checked={!!displayLogo}
						onChange={() => setAttributes({ displayLogo: !displayLogo })}
					/>
					{displayLogo &&
						<Fragment>
							<RangeControl
								label="Logo Size"
								value={ logoSize ? logoSize : "" }
								onChange={changeLogoSize}
								min={5}
								max={50}
								initialPosition={10}
							/>
							<RangeControl
								label="Horizontal Position"
								value={ logoPositionH ? logoPositionH : "" }
								onChange={ ( logoPositionH ) => changeLogoPositionH( logoPositionH ) }
								min={0}
								max={100}
								initialPosition={10}
							/>
							<RangeControl
								label="Vertical Position"
								value={logoPositionV ? logoPositionV : ""}
								onChange={changeLogoPositionV}
								min={0}
								max={100}
								initialPosition={20}
							/>
						</Fragment>
					}
				</PanelBody>

				{/* Hero Text options */}
				<PanelBody title={"Title"}>

					<ToggleControl
						label="Display title?"
						help={
							displayTitle
								? 'Title is displayed.'
								: 'Title is not displayed.'
						}
						checked={!!displayTitle}
						onChange={() => setAttributes({ displayTitle: !displayTitle })}
					/>
	
					{displayTitle &&
						<Fragment>
							<ToggleControl
								label="Align with Logo?"
								help={
									centerTitle
										? 'Aligned horizontally with logo. Adjust with the Logo Horizontal Position'
										: 'Independent of logo.'
								}
								checked={!!centerTitle}
								onChange={updateCenterTitle}
							/>
								{ centerTitle == false && 
								<RangeControl
									label="Horizontal Position"
									value={titlePositionH ? titlePositionH : ""}
									onChange={changeTitlePositionH}
									min={0}
									max={100}
								/>
								} 
							<RangeControl
								label="Vertical Position"
								value={titlePositionV ? titlePositionV : ""}
								onChange={changeTitlePositionV}
								min={0}
								max={100}
								initialPosition={90}
							/>
						</Fragment>
					}
				</PanelBody>

			</InspectorControls>
	
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={['image']}
					multiple={false}
					value={image ? image.id : ''}
					onSelect={selectImage}
					render={({ open }) => (
						<Fragment>
							<img src={image ? image.url : "http://backfromburnout.coachsite-live.local/wp-content/uploads/sites/2/2021/08/beachfromabove.jpg"} />
							<Button onClick={open} className="bg-image-button button">Replace Hero Image</Button>
						</Fragment>
					)}
				/>
			</MediaUploadCheck>

			{displayLogo &&
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={['image']}
						multiple={false}
						value={logo ? logo.id : ''}
						onSelect={selectLogo}
						render={({ open }) => (
							<Fragment >
								<img className="logo" style={{"width": logoSize + "%", "left": logoPositionH + "%", "top": logoPositionV + "%", translateY:logoCorrectLeft + "%"}} src={logo ? logo.url : ""} />
								<Button id="logo" style={{ "left": logoPositionH + "%", "top": logoPositionV + "%"}} onClick={open} className="logo-button button">{logo ? "Replace Logo" : "Add a Logo"}</Button>
							</Fragment>

						)}
					/>
				</MediaUploadCheck>
			}

			{displayTitle &&
				<div className="hero-title" style={centerTitle ? { "left": logoPositionH + "%", "top": titlePositionV + "%"} : { "left": titlePositionH + "%", "top": titlePositionV + "%"}} >
					<RichText
						tagName="h2"
						value={heroTitle}
						onChange={(heroTitle) => setAttributes({ heroTitle: heroTitle })}
						placeholder={__('Enter text...', 'custom-block')}
						keepPlaceholderOnFocus={true}
					/>
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
