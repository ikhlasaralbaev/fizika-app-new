import React from 'react'

import logo from '../asstes/tuit.jpg'

const Home = () => {
	return (
		<div>
			<div className='home-container'>
				<div className='row'>
					<div className='text-content'>
						<br />
						<h1>
							Ózbekistan Respublikası joqarı tálim, ilim hám innovaciyalar
							ministrligi
						</h1>
						<h1>
							Muhammed al-Xorezmiy atındaǵı Tashkent informaciyalıq
							texnologiyaları universiteti Nókis filialı
						</h1>
						<br />
						<br />
						<h4>
							"Fizika II kursı boyınsha prezentaciyalıq multimedialı shınıǵıwlar
							toplamı" elektron oqıw qollanbası
						</h4>
						<span>Tábiyiy hám anıq pánler kafedrası</span>
						<br />
						<span>
							<b>Dúziwshi</b>:{' '}
							<span className='underline'>ass. S.G. Kaypnazarov</span>
						</span>
						<br />
						<br />
						<br />
						<br />
						<span>Nókis - 2023</span>
					</div>
					<div className='logo-wrap'>
						<img width={200} height={200} src={logo} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
