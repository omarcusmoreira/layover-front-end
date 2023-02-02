import Facebook from '../../assets/icons/icon_facebook.svg';
import Google from '../../assets/icons/icon_google.svg';
import Linkedin from '../../assets/icons/icon_linkedin.svg';

import './style.css';

function SocialMedia() {

    return (
        <div className='container_icons'>
            
            <div> <img src={Facebook}/> </div>
            
            <div> <img src={Google}/> </div>
          
            <div> <img src={Linkedin}/> </div>

        </div>
        
    )
}

export default SocialMedia;