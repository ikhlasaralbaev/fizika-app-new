import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'Avtor haqqında maǵlıwmat',
        file: 'author.pdf',
        type: 'pdf'
    }

]

const Author = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
        Avtor haqqında maǵlıwmat
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/author/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Author