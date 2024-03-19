// import './App.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import image1 from './images/newPic2.jpg';
// import image2 from './images/newPic1.jpg';
// import image3 from './images/newPic3.jpg';
// import image4 from './images/newPic4.jpg';
// import image5 from './images/newPic7.jpg';
// import image6 from './images/bg11.avif'
// import image7 from './images/bg10.avif'
// // import img from './images/n1.jpeg'


// export default function Home(){
//   let style={color:'#9d75cf',textAlign:"center"}

// return<>

// <div id="main-page" class="homeContent">
//   <div id='cardDiv'>
//     <Card style={{"border-radius": "60px 20px 60px 20px", "overflow": "hidden","animation": "moving 3s linear alternate"}}>

//       {/* <img src={img}/> */}
//     <Carousel>

//     <Carousel.Item interval={500}>
//     <img src={image3} className="d-block w-100"/>
//     </Carousel.Item>

//     <Carousel.Item interval={500}>
//     <img src={image1} className="d-block w-100"/>
//     </Carousel.Item>

//     <Carousel.Item interval={500}>
//     <img src={image2} className="d-block w-100"/>
//     </Carousel.Item>

//     <Carousel.Item interval={500}>
//     <img src={image5} className="d-block w-100"/>
//     </Carousel.Item>

//     <Carousel.Item interval={500}>
//     <img src={image7} className="d-block w-100"/>
//     </Carousel.Item>

//     <Carousel.Item interval={500}>
//     <img src={image6} className="d-block w-100"/>
//     </Carousel.Item>

   

    
 
//     </Carousel>
     
//     </Card>
//   </div>
// </div>




// {/* <Carousel className='home-carosel'>  */}
// {/* <div className='home-carosel'> */}
// {/* <Carousel.Item interval={500}>  */}
//            {/* <img width='100%'
//             className="d-block w-100"
//             src={image1}
//             alt="Two"
//          />   
//           <div className="overlay">
//           <Card className='overlay-card' style={{backgroundColor:"transparent" , border:"none"}}>
//       <h2>Welcome to Bad Bank</h2>
//       <p>"Nothing is concrete until you have a deposit in bad bank and a signed contract."</p>
//       </Card> 
//     </div>     
//     </div>     */}
//         {/* </Carousel.Item>  */}
      
//     {/* <Carousel.Item interval={1500}> 
//     <img width='100%'
//             className="d-block w-100"
//             src={image5}
//             alt="Two"
//           />   
//           <div className="overlay">
//           <Card className='overlay-card' style={{backgroundColor:"transparent" , border:"none"}}>
//       <h2>Classy Investments. Classy Returns. </h2>
      
//       </Card> 
//     </div>     
//     </Carousel.Item>

//     <Carousel.Item interval={500}> 
//            <img width='100%'
//             className="d-block w-100"
//             src={image2}
//             alt="Two"
//           />          
//         </Carousel.Item>  */}

//        {/* <Carousel.Item interval={500}> 
//            <img width='100%'
//             className="d-block w-100"
//             src={image3}
//             alt="Two"
//           />          
//         </Carousel.Item> */}

         
         
//      {/* </Carousel> */}
      

//         {/* <div style={{display:"flex",gap:"30px"}}>
//             <Card style={{width:"200px",height:"150px",borderRadius:"10px",overflow:"hidden",backgroundColor:"#9d75cf",border:"none"}}>
//               <img src={dep}></img></Card>
//             <Card style={{width:"200px",height:"150px",borderRadius:"10px",overflow:"hidden",backgroundColor:"#9d75cf",border:"none"}}> <img src={withdraw}></img></Card>
//         </div> */}
       

         
//      {/* </div> */}
//     {/* // <div className='home-flex'>
//     // <h1 style={style}>Welcome to Bad Bank ! ! !</h1>
//     //  <div className='home-card'>
//     // <Card  className='my-card'>
    
//     // </Card>
//     //  <h1 style={style}>Welcome to Bad Bank ! ! !</h1>  
//     // </div> */}
   
    
//     </>
// }
import Carousel from 'react-bootstrap/Carousel';
import './App.css'
import Card from 'react-bootstrap/Card';
import n1 from './images/n1.webp';
export  default function App(){
    return(<>
    <div id="hom">Welcome to Bad Bank Project</div>
    
 <img className="img" src={[n1]} style={{width:"1600px",height:"600px"}}></img>
 </>)
}
