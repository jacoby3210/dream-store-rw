import Data 		from "./components/data";
import Loyalty 	from "./components/loyalty";
import './_user.scss'

const User = () => {
	return (
		<main className="user-page">
			<div className="content">
				<Data></Data>
				<Loyalty></Loyalty>
			</div>
		</main>
	);
}

export default User;