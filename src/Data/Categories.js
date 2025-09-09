import meIcon from '../assets/omMig.svg'
import grafikIkon from '../assets/grafik.svg'
import projektIkon from '../assets/projekt.svg'
import SoMeIkon from '../assets/SoMe.svg'
import placeholder from '../assets/react.svg'

  
  const categories = [
  { name: "Me", img: meIcon, 
    subs: [
        {name: "About Me", img: placeholder},
        {name: "Kontakt", img: placeholder}
    ] },
  { name: "SoMe", img: SoMeIkon, 
    subs: [
        {name: "LinkedIn", img: placeholder},
        {name: "Github", img: placeholder}
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