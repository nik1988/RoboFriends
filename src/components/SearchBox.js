import React from 'react';


const SearchBox = ({onSearch}) => {

return(
	
	<div className = "pa2 tc">
	<input className = "pa3 tc ba b--green bg-lightest-blue"
	type = "text" 
	name = "robosearch" 
	placeholder = "Search Robots"
	onChange = {onSearch}
	/>
	</div>
)
}

export default SearchBox;
