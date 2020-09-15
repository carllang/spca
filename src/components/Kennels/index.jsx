import React from 'react';
import Block from './block';

const Kennels = ({ kennels }) => (kennels ? kennels.map((block, id) => <Block key={id} block={block} />) : null);
export default Kennels;
