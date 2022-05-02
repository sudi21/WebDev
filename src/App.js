import logoo from './images/logoo.jpg';
import code from './images/code.jpg';
import html from './images/html.png';
import css from './images/css.png';
import react from './images/react.png';
import Button from './componnets/Button';

import './App.css';
import SizedBox from './componnets/SizedBox';


function App() {
  return (
    <div className="App" style={{ padding: "50px"}}>
      <div style={{display: "flex" }}>
        <img style={{ minWidth: "50%", maxHeight: "40%" , borderTopRightRadius:"35px", borderBottomLeftRadius: "35px"}}src={code} alt="code"/>
        <SizedBox width={20} />
        <div >
        <h1>Wed Development Internship</h1>
        <div style={{ display: "flex" }}>
          
          <img style={{ maxWidth: "25%", maxHeight:"25%"}}src={logoo} alt="logo"/>
          <SizedBox width={20} />
          <h2>By SPARK+ TECHNOLOGIES </h2>
          
        </div>
        <SizedBox height={15} />
          <div className="btn"  >
          <Button color="orange">Internship </Button>
          <SizedBox width={10} />  
          <Button color="purple">Virtual </Button>
          </div>
          <h2>Website Development</h2>
          <h2 style={{color: "#0000FF" }}>Stipend 2000 INR</h2>
         <div className="lang" style={{ display: "flex"}}>
          <p className="para"><img className='imga'  src={html} alt="html"/>HTML</p>
          <p className="para"><img className='imga'  src={css} alt="css"/>CSS</p>
          <p className="para"><img className='imga'  src={react} alt="react"/>REACT</p>
          
          </div>
         </div>
          
          
      
      </div>
      <div className ='text'>
        <p style={{fontSize: 22}}>Web development is the great career choice if you have passion towards web technologies. web development is everything involved in the creation of a website. Typically it refers to the coding and programming side of a website production as opposed to the web design side. It encompasses everything from a single page of HTML to complex feature rich applications designed to be accessed from various Internet connected devices. Web development internship gives opportunity to be part of a team and <span style={{color:"orange"}}>more ...</span></p>
        <p style={{fontSize: 18}}><span style={{fontWeight: "bold" }}>Recommended for: </span>Intermediate</p>
        <p style={{fontSize: 18}}><span style={{fontWeight: "bold" }}>Eligibility: </span>Basic Knowledge HTML,CSS and React JS</p>
        <p style={{fontSize: 18}}><span style={{fontWeight: "bold" }}> Duration: </span>3 months</p>

        <p style={{paddingLeft: "45%"}}><Button color=" orange">Enrolled</Button></p>
      </div>

      </div>
  );
}

export default App;