import './_caption.scss'

const Caption = ({
	category,
	type,
}) => {
	return (
		<div className="catalog-caption">
			<div className="content">
				<span className="accent">{type.toUpperCase()}</span>
				{(category && 
					<span>
						{`/HOME/${category.toUpperCase()}/`}
						<span className="accent">{type.toUpperCase()}</span>
					</span>
				)}
			</div>
		</div>
	);

}

export default Caption;