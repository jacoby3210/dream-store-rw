import { useEffect } from "react";
import PageHeader from "/src/main/layouts/page-header/page-header"

import Filter 		from "./components/filter";
import Products 	from "./components/products";
import Specifics 	from "./components/specifics";

const Catalog = ({
	category,
	type,
}) => {

	return (
		<section className="section catalog">
			<PageHeader 
				text_1={type} 
				text_2={category && `/${category}/${type}`}
			/>
			<Filter/>
			<Products from={0} range={9}/>
			<Specifics/>
		</section>
	)
}

export default Catalog;