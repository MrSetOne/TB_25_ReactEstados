import './Hero.css'

import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'


function Hero() {
  return (
    <div className="Hero">
        <h1 className='Hero__title'>El bar de Paco</h1>
        <div className='Hero__ubi'>
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>Valencia</h2>
        </div>
    </div>
  )
}

export default Hero