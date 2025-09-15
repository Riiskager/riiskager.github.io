import meIcon from '../assets/omMig.svg'
import grafikIkon from '../assets/grafik.svg'
import projektIkon from '../assets/projekt.svg'
import SoMeIkon from '../assets/SoMe.svg'
import placeholder from '../assets/react.svg'
import AboutMe from '../sidePanels/AboutMe'
import Kontakt from '../sidePanels/Kontakt'
import LinkedIn from '../sidePanels/LinkedIn'
import Github from '../sidePanels/GitHub'
import Instagram from '../sidePanels/Instagram'
  
  const categories = [
  { name: "Me", img: meIcon, 
    subs: [
        {name: "About Me", img: placeholder, component: AboutMe },
        {name: "Kontakt", img: placeholder, component: Kontakt}
    ],     
  },
  { name: "SoMe", img: SoMeIkon, 
    subs: [
        {name: "LinkedIn", img: placeholder, component: LinkedIn},
        {name: "Github", img: placeholder, component: Github },
        {name: "Instagram", img: placeholder, component: Instagram}
    ]
  },
  { name: "Projects", img: projektIkon,
     subs: [
        {name: "Project1", img: placeholder},
        {name: "Project2", img: placeholder}
    ]
   },
  { name: "Grafik", img: grafikIkon,
     subs: [
        {name: "Grafik1", img: placeholder},
        {name: "Grafik2", img: placeholder}
    ]
  }
];
export default categories;