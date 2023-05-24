import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Shártnama',
        file: 'shartnama.pdf',
        type: 'pdf'
    }

]

const Policy = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Shártnama
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/policy/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Policy