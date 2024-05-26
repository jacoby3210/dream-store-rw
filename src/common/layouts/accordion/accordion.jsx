import React from 'react';
import './_accordion.scss'

// Accordion is a UI element that is used to organize content. 
// It consists of a list of headers and their associated content. 
// The user can click on a header to expand the content or collapse it back.

export const Accordion = ({ 
	children, 							/* Child elements. */
	defaultIndices = [0], 	/* default values */
	mode = 'single',  			/* Opening mode: single - only one section, multiple - several sections. */
	...props								/* Including additional parameters (id, className, etc.). */
}) => {
	
	// Main functionality.
  const [indices, setIndices] = React.useState(defaultIndices);
	
  const onControlClick = (evt, index) => {
		const isShown = indices.includes(index);

		if (isShown) {
			setIndices(indices.filter(idx => idx !== index));
		} else {
			if (mode === 'single') setIndices([index]);
			else setIndices([...indices, index]);
		}
		evt.stopPropagation();
  };

	// Render component.
  const renderedItems = React.Children.map(children, (child, index) => {
		if (index % 2 === 1) return child;
    return React.cloneElement(child, {
      onClick: (evt) => onControlClick(evt, index),
      shown: indices.includes(index).toString()
    });
  });

  return <div className="accordion" {...props}>{renderedItems}</div>;
};