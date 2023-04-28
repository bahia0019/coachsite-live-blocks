import edit from './edit';
import save from './save';

export const name = 'core/imageQuote';

export const settings = {
    title: 'Image/Quote Block',
    description: 'Block displays Image on one side, Quote on the other.',
    category: 'media',
    icon: 'image',
    edit,
    save,
};