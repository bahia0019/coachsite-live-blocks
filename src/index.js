import { registerBlockType } from '@wordpress/blocks';

// import * as poop from './poop';
// import * as hero from './hero';
import * as imageQuote from './image-quote';

const blocks = [
    // poop,
    // hero,
    imageQuote
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );