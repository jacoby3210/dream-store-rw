import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'

import Welcome from './pages/welcome/welcome'

import '/src/assets/themes/theme.scss'

function Main() {
	const types = [];
	const renderLink = (category, type) => {
		const path = `/${category}/${type}/`;
		// return <Route key={path} element = {<Catalog category={category} type={type}/>} path={path} />;
	}

	return (
		<>
			<Router>
				<Header/>
				<Routes>
					{/* <Route element={<Cart/>} path="/cart"/>  */}
					
					{/* <Route element={<Catalog type={"all"}/>} path="/catalog/" /> */}
					{/* {types.map((type) => renderLink('men', type))} */}
					{/* {types.map((type) => renderLink('women', type))} */}
					{/* {types.map((type) => renderLink('kids', type))} */}

					<Route exact element = {<Welcome/>} path="/" />
				</Routes>
				<Footer/>
			</Router>
		</>
	);
}

export default React.memo(Main);