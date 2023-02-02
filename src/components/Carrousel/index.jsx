
// import Carousel from "react-material-ui-carousel";
// import { ButtonsActions } from "./componentsCarrousel/ButtonsActions";
// import { Item } from './componentsCarrousel/Item'

//  import './style.css'

//  export function Carrousel() {
//     const items = [
//         {
//             avaliation:5,
//             text:'Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?',
//             title:'LOREM IPSUM DOLOR SIT AMET',
//             name:'Loremipso',
//             companyName:'CEO GetNextDesign ',
//         },
//         {
//             avaliation:5,
//             text:'Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?',
//             title:'LOREM IPSUM DOLOR SIT AMET',
//             name:'Loremipso',
//             companyName:'CEO GetNextDesign ',
//         },
//         {
//             avaliation:5,
//             text:'Lorem ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?',
//             title:'LOREM IPSUM DOLOR SIT AMET',
//             name:'Loremipso',
//             companyName:'CEO GetNextDesign ',
//         }
//      ]
    
//      return (
//         <Carousel
//             className="carousel"
//             NextIcon={<ButtonsActions isLeft/>}
//             PrevIcon={<ButtonsActions  />}
//             navButtonsAlwaysVisible={true}
//             navButtonsProps={{
//                 style: {
//                     backgroundColor: '#E30B22',
//                     color:'#fff',
//                     padding: 0
//                 }
//             }} 
//             navButtonsWrapperProps={{
//                 style: {
//                     position: 'absolute',
//                     top: 'unset',
//                     bottom: '-7.5rem',
//                     left: '-44rem',
//                     zIndex:9,
//                     overflow: 'auto',
//                     height: 'auto',
//                 }
//             }} 
//             activeIndicatorIconButtonProps={{
//             style: {
//                 color: '#E30B22',
//             }}}
            
//         >
//             {items.map((item,index) => 
//                 <Item 
//                     avaliation={item.avaliation}
//                     text={item.text}
//                     title={item.title}
//                     name={item.name}
//                     companyName={item.companyName}
//                     key={index}
//                 />
//             )}
//         </Carousel>
//      )
//  }