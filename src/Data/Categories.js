import meIcon from '../assets/omMig.svg'
import grafikIkon from '../assets/grafik.svg'
import projektIkon from '../assets/projekt.svg'
import SoMeIkon from '../assets/SoMe.svg'
import AboutMe from '../sidePanels/AboutMe'
import Kontakt from '../sidePanels/Kontakt'
import LinkedIn from '../sidePanels/LinkedIn'
import Github from '../sidePanels/GitHub'
import Instagram from '../sidePanels/Instagram'
import ZeroBuzz from '../sidePanels/ZeroBuzz'
import Coil from '../sidePanels/Coil'
import Steno from '../sidePanels/Steno'
import Kogebog from '../sidePanels/Kogebog'
import DigitalGrafik from '../sidePanels/DigitalGrafik'
import ZeroLogo from '../assets/ZeroLogo.png'
import avatar from '../assets/Aktiv8.png'
import atklogo from '../assets/ATKlogo.png'
import emillogo from '../assets/Emillogo.png'
import Cclogo from '../assets/CClogo.png'

import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";


  const categories = [
  { name: "Mig", img: meIcon, //Overkatekori
    subs: [ //Subkategori
        {name: "Omkring mig", img: emillogo, component: AboutMe }, //"component = side-panel"
        {name: "Kontakt", icon: faAddressCard, component: Kontakt}
    ],     
  },
  { name: "SoMe", img: SoMeIkon, 
    subs: [
        {name: "LinkedIn", icon: faLinkedin, component: LinkedIn},
        {name: "Github", icon: faGithub, component: Github },
        {name: "Instagram", icon: faInstagram, component: Instagram}
    ]
  },
  { name: "Projekter", img: projektIkon,
     subs: [
        {name: "ZeroBuzz", img: ZeroLogo, component: ZeroBuzz},
        {name: "Steno", img: avatar, component: Steno},
        {name: "Coil", img: Cclogo, component: Coil},
        {name: "Alletiders", img: atklogo, component: Kogebog}
    ]
   },
  { name: "Grafik", img: grafikIkon,
     subs: [
        {name: "Digtial rodebunke", img: grafikIkon, component: DigitalGrafik},
        //{name: "Tegnebogen", img: grafikIkon}
    ]
  }
];
export default categories;