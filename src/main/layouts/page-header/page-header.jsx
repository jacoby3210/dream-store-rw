import './_page-header.scss'

const PageHeader = ({
	text_1,
	text_2,
}) => {
	const Span = ({text}) => {
		return (
			<span className='accent page-header-text'>
				{text}
			</span>
		);
	}
	return (
		<div className="page-header">
			<div className="content">
				{(text_1 && <Span text={text_1.toUpperCase()}/>)}
				{(text_2 && <Span text={text_2.toUpperCase()}/>)}
			</div>
		</div>
	);

}

export default PageHeader;