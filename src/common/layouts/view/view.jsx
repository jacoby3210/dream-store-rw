
export const View = ({
	data = [],											// Data provider for mapping.
	from = 0,												// Display elements from the element with the specified index.
	range = 0,											// Range of items to display (count).
	RenderComponent = () => <li/>, 	// Component (function or class) for displaying an item.
	...props
}) => {

	return (
		<div {...props}>
			{
				data
					.slice(from, from + range)
					.map((item, i) => <RenderComponent key={i} {...item}/>)
			}
		</div>
	);

}