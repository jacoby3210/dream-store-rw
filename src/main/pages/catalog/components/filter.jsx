import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Accordion, Popup, Select } from '/src/common/common.js';
import {brands, designers, types} 	from '/src/main/core/constants/constants' 

import { 
	filterDataByPrice, 
	filterDataBySize, 
	filterDataByTrend 
} from '/src/main/core/products/slice';

import './_filter.scss'

const Filter = ({
}) => {

	const utilCapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const getLink = (name) => {
		const path = `/${name}/`;
		return (
			<Link key={path} className='header-menu-navigator-link' to={path}>
				{utilCapitalizeFirstLetter(name)}
			</Link>
		)
	}

	const dispatch = useDispatch();

	const getSelectedOptions = (select) => {
		const rs = [];
		for (const option of select.querySelectorAll('input')) {
			if (option.checked) rs.push(option.value);
		}
		return rs;
	}

	const handleFilterByPrice = (evt) => {
		dispatch(filterDataByPrice(getSelectedOptions(evt.currentTarget)));
	}

	const handleFilterBySize = (evt) => {
		dispatch(filterDataBySize(getSelectedOptions(evt.currentTarget)));
	}

	const handleFilterByTrend = (evt) => {
		dispatch(filterDataByTrend([evt.target.checked]));
	}

	const Checkbox = ({
		id,
		text,
		onChange = (evt)=>{},
	}) => {

		return (
			<div className='field'>
				<input id={id} type='checkbox' onChange={onChange}/>
				<label className='label' htmlFor={id}>{text}</label>
			</div>
		);
	}

	const Option = ({
		range
	}) => {
		return (
			<li key={range}>
				<input id={range} type={'checkbox'} value={range}/>
				<label className='label' htmlFor={range}>{range}</label>
			</li>
		);
	}

	return (
		<div className="filter">
			<div className='content'>
				<div className="primary">
					<Popup content={<span>FILTER<i className={'fa-solid fa-filter'}></i></span>}>
						<Accordion className="category-accordion accordion">
							<h4 shown="true">CATEGORY</h4>
							<div>
								{types.map((type) => getLink(type))}
							</div>
							<h4>BRAND</h4>
							<div>
								{brands.map((type) => getLink(type))}
							</div>
							<h4>DESIGNER</h4>
							<div>
								{designers.map((type) => getLink(type))}
							</div>
						</Accordion>
					</Popup>
				</div>
				<div className="optional">
					<Select
						caption={'SIZE'} 
						options={[{range:'S'}, {range:'M'}, {range:'L'}, {range:'XL'}]} 
						onChange={handleFilterBySize}
						RenderElement={Option}
					/>
					<Select
						caption={'PRICE'} 
						options={[{range:'0-50'}, {range:'50-99'}, {range:'100-500'}, {range:'500-1000'}]} 
						onChange={handleFilterByPrice}
						RenderElement={Option}
					/>
					<Checkbox id={'trending'} text={'TRENDING NOW'} onChange={handleFilterByTrend}/>
				</div>
			</div>
		</div>
	);

}


export default Filter;