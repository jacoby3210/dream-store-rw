import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'

import Catalog 			from './pages/catalog/catalog'
import ShoppingCart from './pages/shopping-cart/shopping-cart'
import User 				from './pages/user/user'
import Welcome 			from './pages/welcome/welcome'

import '/src/assets/themes/theme.scss'

function Main() {

	return (
		<>
			<Router>
				<Header/>
				<Routes>
					<Route element={<Catalog type={"all"}/>} 	path="/catalog/" />
					<Route element={<ShoppingCart/>} 					path="/shopping-cart" /> 
					<Route element={<User/>} 									path="/user" />
					<Route element={<Welcome/>} 							path="/" exact />
				</Routes>
				<Footer/>
			</Router>
		</>
	);
}

export default React.memo(Main);