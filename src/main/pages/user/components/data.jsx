import './_data.scss'
const Data = () => {
	return (
		<form className="user-data">
			<fieldset>
				<legend>PROFILE DATA</legend>
				<input name="first-name" 	placeholder='First Name'/>
				<input name="last-name" 	placeholder='Last Name'/>
				<input name="email" 			placeholder='E-mail'/>
				<input name="phone" 			placeholder='Phone'/>
			</fieldset>
			<fieldset>
				<legend>SHIPPING ADRESS</legend>
				<input name="city" 				placeholder='City'	/>
				<input name="address" 		placeholder='Address'	/>
				<input name="postcode" 		placeholder='Postcode' />
			</fieldset>
			<button onClick={null} type='submit'>Submit</button>
			<button onClick={null} type='reset'>Reset</button>
		</form>
	);
}

export default Data;