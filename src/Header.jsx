import reactLogo from './assets/react.svg'
import './styles/Header.css'

export default function Header() {
  return (
    <header>
      <img src={reactLogo}  alt='React logo' />
      <div className='logoText'>React chess</div>
    </header>
  )
}