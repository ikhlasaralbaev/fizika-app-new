import React from 'react'
import { Link } from 'react-router-dom'

const lectures = [
	{
		id: 1,
		title: '1-lekciya.',
		file: '1-lekciya.docx',
		type: 'docx',
	},
	{
		id: 2,
		title: '2-lekciya.',
		file: '2-lekciya.docx',
		type: 'docx',
	},
	{
		id: 3,
		title: '3-lekciya.',
		file: '3-lekciya.docx',
		type: 'docx',
	},
	{
		id: 4,
		title: '4-lekciya.',
		file: '4-lekciya.docx',
		type: 'docx',
	},
	{
		id: 5,
		title: '5-lekciya.',
		file: '5-lekciya.docx',
		type: 'docx',
	},
	{
		id: 6,
		title: '6-lekciya.',
		file: '6-lekciya.docx',
		type: 'docx',
	},
	{
		id: 70,
		title: '7-lekciya.',
		file: '7-lekciya.docx',
		type: 'docx',
	},
	{
		id: 6,
		title: '8-lekciya.',
		file: '8-lekciya.docx',
		type: 'docx',
	},
	{
		id: 7,
		title: '9-lekciya.',
		file: '9-lekciya.docx',
		type: 'docx',
	},
	{
		id: 8,
		title: '10-lekciya.',
		file: '10-lekciya.docx',
		type: 'docx',
	},
	{
		id: 9,
		title: '11-lekciya. ',
		file: '11-lekciya.docx',
		type: 'docx',
	},
	{
		id: 10,
		title: '12-lekciya. ',
		file: '12-lekciya.docx',
		type: 'docx',
	},
	{
		id: 11,
		title: '13-lekciya. ',
		file: '13-lekciya.docx',
		type: 'docx',
	},
	{
		id: 12,
		title: '14-lekciya. ',
		file: '14-lekciya.docx',
		type: 'docx',
	},
	{
		id: 13,
		title: '15-lekciya. ',
		file: '15-lekciya.docx',
		type: 'docx',
	},
]

const Documents = ({ setTitle }) => {
	return (
		<div>
			<h5 className='heading'>Lekciyalar teksti</h5>
			<ul className='list'>
				{lectures.map(lecture => (
					<li
						key={lecture.id}
						className='list-item'
						onClick={() => setTitle(lecture.title)}
					>
						<Link to={`/lectures/docs/${lecture.file}`}>{lecture.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Documents
