import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Isshi oqıw baǵdarlaması',
        file: 'isshioqiw.docx',
        type: 'docx'
    }

]

const IsshiOqiw = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Isshi oqıw baǵdarlaması
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/isshi_oqiw_bagdarlamasi/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default IsshiOqiw