import React, { useState } from 'react';

export const Paginator = ({ 
	itemsPerPage, 				// Количество элементов на странице.
	totalItems, 					// Количество элементов в исходном массиве данных. 
	visiblePageControls,	// Количество отображаемых кнопок для страниц.
	onChangeCallback, 		// 
	...props							// 
}) => {
	
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handleToPage = (page) => {
		onChangeCallback((page-1) * itemsPerPage);
    setCurrentPage((prevPage) => page);
	}

  const handleFirst = () => {handleToPage(1);};
  const handlePrev = () => {handleToPage(Math.max(currentPage - 1, 1));};
  const handleNext = () => {handleToPage(Math.min(currentPage + 1, totalPages));};
  const handleLast = () => {handleToPage(totalPages);};

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

<<<<<<< HEAD
	// Get first link.
=======
	// Определить первую ссылку.
>>>>>>> fa0a6c237577a0f18b48654f1e055ca32aab2241
	const firstVisiblePageControl = Math.min(
		Math.max(currentPage - Math.floor(visiblePageControls / 2), 1),
		totalPages - visiblePageControls + 1
	);

	const children = [];
	for(let i = 0; i < visiblePageControls; i++){
		const index = firstVisiblePageControl + i;
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
		<div className='paginator' {...props}>
			<button className='paginator-button paginator-first' onClick={handleFirst} disabled={currentPage === 1}>
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button className='paginator-button paginator-prev' onClick={handlePrev} disabled={currentPage === 1}>
				<i className={'fa-solid fa-angle-left'}></i>
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