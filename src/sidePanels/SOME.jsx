import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SOME(){
   
    return(
        <>
            <a  href="https://www.linkedin.com/in/emil-riisager-axelsen-12443b20b/" target="_blank">
            <article className="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                <h1> LinkedIn</h1>
            </article>
            </a>
            <a href="https://www.instagram.com/riiskager/" target="_blank">
            <article  className="Instagram" >
                <FontAwesomeIcon icon={faInstagram} size='3x'/>
                <h1> Instagram</h1>
            </article>
           </a>
            <a href="https://github.com/Riiskager" target="_blank">
            <article className="GitHub">
                <FontAwesomeIcon icon={faGithub} size='3x'/>
                <h1> Github </h1>
            </article>
            </a>              
        </>
    )
}