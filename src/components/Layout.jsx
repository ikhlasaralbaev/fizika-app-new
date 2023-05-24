import { Layout, Menu } from 'antd'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Annotaciya from '../pages/Annotaciya'
import Author from '../pages/Author'
import Bahalaw from '../pages/Bahalaw'
import Certificate from '../pages/Certificate'
import Details from '../pages/Details/Details'
import Glossary from '../pages/Glassary'
import Home from '../pages/Home'
import IsshiOqiw from '../pages/IsshiOqiw'
import Labaratory from '../pages/Labaratory/Labaratory'
import Documents from '../pages/Lectures/Documents'
import Slides from '../pages/Lectures/Slides'
import PanDasturi from '../pages/PanDasturi'
import Practices from '../pages/Practices/Practices'
import SelfStudy from '../pages/SelfStudy/SelfStudy'
import Policy from '../pages/Shartnama'
import TestDetails from '../pages/TestDetails.jsx'
import Tests from '../pages/Tests'

const { Header, Content, Footer, Sider } = Layout

export default () => {
	const [title, setTitle] = React.useState('Default')

	const location = useLocation()

	console.log(location)

	return (
		<Layout hasSider>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
					width: '300px',
				}}
				width={300}
			>
				<h1 className='logo'>
					FIZIKA <span>II</span>
				</h1>
				<Menu
					theme='light'
					mode='inline'
					defaultSelectedKeys={['1']}
					style={{ height: '100vh' }}
				>
					<Menu.Item key='1'>
						<Link to='/'>Bas bet</Link>
					</Menu.Item>
					<Menu.Item key='2323'>
						<Link to='/annotaciya'>Annotaciya</Link>
					</Menu.Item>
					<Menu.SubMenu key='sub1' title={<span>Lekciyalar</span>}>
						<Menu.Item key='lectures'>
							<Link to='/lectures/slides'>Prezentaciyalar</Link>
						</Menu.Item>
						<Menu.Item key='documents'>
							<Link to='/lectures/documents'>Lekciyalar teksti</Link>
						</Menu.Item>
					</Menu.SubMenu>

					<Menu.SubMenu key={'sub2'} title={`Ámeliy shınıǵıwlar `}>
						<Menu.Item key='documents2'>
							<Link to='/practices/documents'>Ámeliy shınıǵıwlar </Link>
						</Menu.Item>
					</Menu.SubMenu>
					{/* <Menu.Item key='3'>
						<Link to='/labaratory'>Laboratoriya shınıǵıwları </Link>
					</Menu.Item> */}
					{/* <Menu.Item key="4">
            <Link to="/self-study">Óz betinshe tálim shınıǵıwları </Link>
          </Menu.Item> */}
					{/* <Menu.Item key="glassary">
              <Link to="/lectures/glassary">Glossariy</Link>
        </Menu.Item> */}

					{/* <Menu.SubMenu key={'extra1'} title={'Qosımshalar'} >
          <Menu.Item key="extra1">
            <Link to="/pandasturi">Pán dástúri </Link>
          </Menu.Item>
          <Menu.Item key="extra2">
            <Link to="/isshi_oqiw_bagdarlamasi">Isshi oqiw baǵdarlaması</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/tests">Test sorawları</Link>
          </Menu.Item>
          <Menu.Item key="extra3">
            <Link to="/bahalaw_kriteriyalari">Bahalaw kriteriyaları</Link>
          </Menu.Item>
        </Menu.SubMenu> */}
					{/* <Menu.Item key='70'>
						<Link to='/certificate'>Ruxsatnama</Link>
					</Menu.Item>
					<Menu.Item key='7'>
						<Link to='/policy'>Shártnama</Link>
					</Menu.Item>
					<Menu.Item key='771'>
						<Link to='/author'>Avtor haqqında maǵlıwmat</Link>
					</Menu.Item> */}
				</Menu>
			</Sider>
			<Layout className='site-layout' style={{ marginLeft: 300 }}>
				<Content style={{ padding: '24px 16px 16px', overflow: 'initial' }}>
					<div style={{ textAlign: 'center', minHeight: '100vh' }}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route
								path='/lectures/slides'
								element={<Slides setTitle={setTitle} />}
							/>
							<Route
								path='/lectures/documents'
								element={<Documents setTitle={setTitle} />}
							/>
							<Route
								path='/practices/documents'
								element={<Practices setTitle={setTitle} />}
							/>
							<Route
								path='/labaratory'
								element={<Labaratory setTitle={setTitle} />}
							/>
							<Route
								path='/labaratory/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/lectures/slides/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/lectures/docs/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/practices/docs/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/self-study'
								element={<SelfStudy setTitle={setTitle} />}
							/>
							<Route
								path='/lectures/glassary'
								element={<Glossary setTitle={setTitle} />}
							/>
							<Route
								path='/lectures/glassary/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/self-study/:file'
								element={<Details title={title} />}
							/>
							<Route path='/certificate' element={<Certificate />} />
							<Route
								path='/tests'
								element={<Tests setTitle={setTitle} title={title} />}
							/>
							<Route
								path='/tests/:file'
								element={<TestDetails setTitle={setTitle} title={title} />}
							/>
							<Route
								path='/bahalaw_kriteriyalari'
								element={<Bahalaw setTitle={setTitle} />}
							/>
							<Route
								path='/bahalaw_kriteriyalari/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/isshi_oqiw_bagdarlamasi'
								element={<IsshiOqiw setTitle={setTitle} />}
							/>
							<Route
								path='/isshi_oqiw_bagdarlamasi/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/annotaciya'
								element={<Annotaciya setTitle={setTitle} />}
							/>
							<Route
								path='/annotaciya/:file'
								element={<Details title={title} />}
							/>
							<Route
								path='/pandasturi'
								element={<PanDasturi setTitle={setTitle} />}
							/>
							<Route
								path='/pandasturi/:file'
								element={<Details title={title} />}
							/>
							<Route path='/policy' element={<Policy setTitle={setTitle} />} />
							<Route path='/policy/:file' element={<Details title={title} />} />
							<Route path='/author' element={<Author setTitle={setTitle} />} />
							<Route path='/author/:file' element={<Details title={title} />} />
						</Routes>
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}
