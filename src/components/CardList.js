
import React from 'react';
import Card from './Card';

const cardList = ({robots}) => {
			
	return (

		<div className = "tc m7">
		{	
			robots.map((robot,i) => {
			return (
				<Card 
				key = {i}
				name = {robots[i].name} 
				id = {robots[i ].id} 
				email = {robots[i].email}
				/>)

		})
		}
		</div>
	)

}



export default cardList;