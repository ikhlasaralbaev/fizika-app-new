import React from 'react'
import { Link } from 'react-router-dom'

const cources = [
    {
        id: 1,
        title: 'FIZIKA I PÁNINEN BAHALAW KRITERIYALARÍ',
        file: 'bahalaw.docx',
        type: 'docx'
    }

]

const Bahalaw = ({ setTitle }) => {
  return (
      <div>
        <h5 className="heading">
            Bahalaw
        </h5>


        <ul className='list'>
            {
                cources.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={`/bahalaw_kriteriyalari/${lecture.file}`}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Bahalaw