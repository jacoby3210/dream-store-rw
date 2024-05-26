import React, { useState } from 'react';
import {mergeProps} from 'react-aria';
import './_paginator.scss'

export const Paginator = ({ 
	itemsPerPage, 				// The number of elements on an individual page.
	itemsTotal, 					// Total number of elements in the original data array. 
	pageControlsCount,		// The number of buttons displayed for page switching.
	onChangeCallback, 		// 
	...props							// Common react properties.
}) => {
	
  const [currentPage, setCurrentPage] = useState(1);

	const resultProps = mergeProps({className:'paginator'}, props);
  const totalPages = Math.ceil(itemsTotal / itemsPerPage);

	const handleToPage = (page) => {
		onChangeCallback((page-1) * itemsPerPage);
    setCurrentPage((prevPage) => page);
	}

  const handleFirst = () => {handleToPage(1);};
  const handlePrev  = () => {handleToPage(Math.max(currentPage - 1, 1));};
  const handleNext  = () => {handleToPage(Math.min(currentPage + 1, totalPages));};
  const handleLast  = () => {handleToPage(totalPages);};

	// Get first visible page control.
	const firstVisiblePageControl = Math.min(
		Math.max(currentPage - Math.floor(pageControlsCount / 2), 1),
		totalPages - pageControlsCount + 1
	),
	lastVisiblePageControl = firstVisiblePageControl + pageControlsCount;

	const children = [];
	for(let index = firstVisiblePageControl; index < lastVisiblePageControl; index++){
		children.push(
			<button key={index}
				className={`paginator-button${ (currentPage == index ? ' paginator-button-current' : '') }`}
				onClick={() => {handleToPage(index);}}
			>
				{index}
			</button>
		)
	}

	return (
		<div {...resultProps}>
			<button className='paginator-button paginator-first' onClick={handleFirst} disabled={currentPage === 1}>
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button className='paginator-button paginator-prev' onClick={handlePrev} disabled={currentPage === 1}>
				<i className={'solid fa-angle-left'}></i>
			</button>
			<div className={'paginator-controls'}>{children}</div>
			<button className='paginator-button paginator-next' onClick={handleNext} disabled={currentPage === totalPages}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button className='paginator-button paginator-last' onClick={handleLast} disabled={currentPage === totalPages}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</div>
  );
};