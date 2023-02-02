import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import './style.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="box-shadow"></div>
            <div className="footer-main">
                <ul className="footer-topics">
                    <li>
                        <div className="footer-topics-social">
                            <p>Lorem ipsum</p>
                            <span>Lorem ipsum dolor sit amet. Qui necessitatibus </span>
                            <div className="list-social">
                                <LinkedInIcon/>
                                <FacebookIcon/>
                                <TwitterIcon/>
                                <AllInclusiveIcon/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="footer-resource">
                            <p>Company</p>
                            <div className='list-resource'>
                                <span>About Us</span>
                                <span>Blog</span>
                                <span>Pricing</span>
                            </div>
                            <span>* Lorem ipsum dolor sit amet.Qui necessitatibus assumenda ut facere facere</span>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}