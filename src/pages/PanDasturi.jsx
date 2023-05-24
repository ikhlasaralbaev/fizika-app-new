import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Pán dástúri',
        file: 'pandasturi.pdf',
        type: 'pdf'
    }

]

const PanDasturi = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Pán dástúri
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/pandasturi/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default PanDasturi