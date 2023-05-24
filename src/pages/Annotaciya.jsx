import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
	{
		id: 1,
		title: 'Annotaciya',
		file: 'Annotaciya.docx',
		type: 'docx',
	},
]

const Annotaciya = ({ setTitle }) => {
	return (
		<div>
			<h5 className='heading'>Annotaciya</h5>

			<ul className='list'>
				{cources.map(lecture => (
					<li
						key={lecture.id}
						className='list-item'
						onClick={() => setTitle(lecture.title)}
					>
						<Link to={`/annotaciya/${lecture.file}`}>{lecture.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Annotaciya
