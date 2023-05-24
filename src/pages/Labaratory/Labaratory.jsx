import React from 'react'
import FileViewer from 'react-file-viewer'
import { Link } from 'react-router-dom'
 

const labaratories = [
    {
        id: 10,
        title: '1 - Laboratoriyalıq jumıs. ATVUD MASHINASÍNDA KINEMATIKA HÁM DINAMIKA NÍZAMLARÍN ÚYRENIW',
        file: 'labaratoriya-new.docx',
        type: 'docx'
    },
    {
        id: 5,
        title: '2 - Laboratoriyalıq jumıs. DENELERDIŃ INERCIYA MOMENTLERIN DINAMIKALÍQ USÍL MENEN ANÍQLAW',
        file: 'labaratoriya-l.docx',
        type: 'docx'
    },
    {
        id: 6,
        title: '3 - Laboratoriyalıq jumıs. OBERBEK MAYATNIGINDE DENELERDIŃ INERCIYA  MOMENTLERIN  ANÍQLAW',
        file: 'labaratoriya-3.docx',
        type: 'docx'
    },
    {
        id: 6,
        title: '4 – Laboratoriyalıq jumıs (virtual). KLASSIK QATTÍ ROTATORDÍŃ AYLANÍWÍN (OBERBEK MAYATNIGI MÍSALÍNDA) ÚYRENIW',
        file: '4-labara.docx',
        type: 'docx'
    },
    {
        id: 6,
        title: '5 – Laboratoriyalıq jumıs (virtual). DENELERDIŃ INERCIYA MOMENTLERIN BURALMA TERBELISLER USÍLÍNDA ÓLSHEW',
        file: '5-labara.docx',
        type: 'docx'
    },
    {
        id: 11,
        title: '6 - Laboratoriyalıq jumıs. MEXANIKADA ENERGIYANÍŃ SAQLANÍW NÍZAMLARÍN ÚYRENIW',
        file: 'labaratoriya-6.docx',
        type: 'docx'
    },
    {
        id: 1,
        title: '7 - Laboratoriyalıq jumıs. SUYÍQLÍQLARDÍŃ ISHKI SÚYKELIW KOEFFICIENTIN STOKS USÍLÍ MENEN ANÍQLAW',
        file: '7-labara.docx',
        type: 'docx'
    },
    {
        id: 2,
        title: '8 - Laboratoriyalıq jumıs. GAZLAR JÍLLÍLÍQ SÍYÍMLÍLÍQLARÍNÍŃ QATNASÍN KLEMAN-DEZORM USÍLÍ MENEN ANÍQLAW',
        file: '8-labara.docx',
        type: 'docx'
    },
    {
        id: 3,
        title: '9 - Laboratoriyalıq jumıs.HAWA USHÍN MOLYAR JÍLLÍLÍQ SÍYÍMLÍLÍQLARÍ QATNASÍ CP/CV NÍ ANÍQLAW',
        file: '9-labara.docx',
        type: 'docx'
    },
    {
        id: 4,
        title: '10 - Laboratoriyalıq jumıs.QATTÍ DENELERDIŃ JÍLLÍLÍQ ÓTKIZGISHLIK KOEFFICIENTIN KALORIMETRLIK USÍL MENEN ANÍQLAW',
        file: '10-labara.docx',
        type: 'docx'
    },
    {
        id: 7,
        title: '11 - Laboratoriyalıq jumıs. ELEKTROSTATIKALÍQ MAYDAN POTENCIAL BÓLISTIRILIWIN ÚYRENIW',
        file: '11-labara.docx',
        type: 'docx'
    },
    {
        id: 8,
        title: '12 – Laboratoriyalıq jumıs. ÓTKIZGISH QARSÍLÍQLARÍN UITSTON  KÓPIRI JÁRDEMINDE ÓLSHEW',
        file: '12-labara.docx',
        type: 'docx'
    },

    {
        id: 9,
        title: '13 - Laboratoriyalıq jumıs. MAGNIT MAYDAN INDUKCIYASÍ HÁM AMPER KÚSHIN ANÍQLAW',
        file: '13-labara.docx',
        type: 'docx'
    },
    {
        id: 12,
        title: '14 - Laboratoriyalıq jumıs. TANGENS-BUSSOL JÁRDEMINDE JER MAGNIT MAYDAN KERNEWLILIGINIŃ GORIZONTAL QURAWSHÍSÍN ANÍQLAW',
        file: '14-labara.docx',
        type: 'docx'
    },
    {
        id: 13,
        title: '15 - Laboratoriyalıq jumıs. SOLENOID KÓSHERINDEGI MAGNIT MAYDANÍN ÚYRENIW',
        file: '15-labara.docx',
        type: 'docx'
    },
   
]



const Labaratory = ({ setTitle }) => {
  return (
    <div>
        <h5 className="heading">
        Labaratoriya shınıǵıwları
        </h5>


        <ul className='list'>
            {
                labaratories.map(lecture => (
                    <li key={lecture.id} className="list-item" onClick={() => setTitle(lecture.title)}>
                        <Link to={lecture.file}>
                            {lecture.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Labaratory