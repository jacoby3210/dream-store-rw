import { useEffect } from "react";
import Caption 		from "./components/caption";
import Filter 		from "./components/filter";
import Products 	from "./components/products";
import Specifics 	from "./components/specifics";

const Catalog = ({
	category,
	type,
}) => {

	return (
		<section className="section catalog">
			<Caption category={category} type={type}/>
			<Filter/>
			<Products from={0} range={9}/>
			<Specifics/>
		</section>
	)
}

export default Catalog;