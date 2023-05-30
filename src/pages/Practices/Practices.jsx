import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Practices = ({ setTitle }) => {
	const [practices, setPractices] = useState([])

	useEffect(() => {
		for (let i = 1; i < 16; i++) {
			setPractices(prev => [
				...prev,
				{
					id: i,
					title: `${i}-Ámeliy shınıǵıw.`,
					file: `${i}-ameliy.docx`,
					type: 'docx',
				},
			])
		}
	}, [])

	return (
		<div>
			<h5 className='heading'>Ámeliy shınıǵıwlar</h5>

			<ul className='list'>
				{practices.map(practice => (
					<li
						key={practice.id}
						className='list-item'
						onClick={() => setTitle(practice.title)}
					>
						<Link to={`/practices/docs/${practice.file}`}>
							{practice.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Practices
