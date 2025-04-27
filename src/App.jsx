
import './App.css'
import profilPic from './assets/Profile pic 3.png';
import insta from './assets/insta.avif';
import git from './assets/git.png';
import linked from './assets/linkedin.png';

function App() {
  
  return (
    <div className='container flex justify-center items-center min-h-screen sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
      <div className='box1 flex-[0.6]  m-10 h-[90vh] drop-shadow-xl drop-shadow-cyan-500/50 titillium-web-regular-italic m-5 text-white'>
      <div className=' flex flex-row justify-around  items-center bg-slate-800  h-[45vh] rounded-t-2xl sm:flex-row-reverse  md:flex-row'>
        <div className='flex-[0.7] sm:flex-col sm:w-full titillium-web-regular-italic m-5 text-white lg:m-2 md:text-md sm:text-sm'>
        <h2 className='hi'>Hi there I'm</h2>
        <h1 className='head text-4xl lg:text-3xl md:text-md sm:text-sm'> Santhosh Kumar R,</h1>
        
        <h2 className='xl:text-xl lg:text-lg sm:text-md'>a  <span className=' stack text-cyan-400 text-2xl md:text-md'>Full Stack Developer ...</span> </h2>
        <br className='sm:hidden xl:block' />
        <h3 className='intro lg:text-md text-justify sm:hidden md:block lg:block xl:block 2xl:block md:text-md '> I specialize in creating seamless user experiences with React, crafting robust backends with Node.js and Express, and managing data efficiently with MongoDB</h3>
        </div>
        <div className=''>
        <img src={profilPic} alt="" className= 'profile sm:text-sm flex-[0.3] align-middle lg:w-45 lg:h-45 rounded-full drop-shadow-lg drop-shadow-cyan-500/50 border-dashed border-white border-2 m-5 p-3 md:w-25 md:h-25' />
        </div>
      </div>
      <div className='flex  flex-col items-left bg-slate-600 h-[40vh] rounded-b-2xl titillium-web-regular-italic  text-white sm:text-sm'>
        <div className='flex flex-row mx-11 p-2'><h2 className=' text-3xl text-white px-1'>My </h2><span className='text-cyan-400 text-3xl'>Works</span></div>
        
        <div className='block mx-13 md:text-md'>
        <span className='text-white xl:text-2xl lg:text-xl md:text-md'><a href="https://subtle-kleicha-aa8606.netlify.app/"> Auction's</a></span>
        <span className='text-white xl:text-2xl lg:text-xl md:text-md block'><a href="https://comforting-syrniki-47da19.netlify.app/"> e-commerce</a></span>
        <span className='text-white xl:text-2xl lg:text-xl  md:text-md block'><a href="https://capable-arithmetic-b80e07.netlify.app"> Movie DB</a></span>
        <span className='text-white xl:text-2xl lg:text-xl md:text-md block'><a href="https://creative-duckanoo-63d2f9.netlify.app/"> Income expense calculator</a></span>
        <span className='text-white xl:text-2xl lg:text-xl md:text-md block'><a href="https://thriving-cassata-65e80f.netlify.app/"> responsive design site</a></span>
        
        </div>
        
      </div>
      </div>
      <div className='box2 flex-[0.4] m-10 h-[90vh] drop-shadow-xl drop-shadow-cyan-500/50 titillium-web-regular-italic m-5 text-white'>
      <div className='flex flex-col bg-slate-800  h-[35vh] rounded-t-2xl titillium-web-regular-italic  text-white'>
      <div className='flex flex-row block mx-11 p-2'><h2 className=' text-3xl text-white px-2'>About </h2><span className='text-cyan-400 text-3xl'>Me</span></div>
      <br className='md:hidden lg:block' />
      <div className=''><p className='block text-white mx-11 px-2 text-justify'>I’m a MERN Stack Developer with a Master’s degree from the College of Engineering, Guindy. I’m passionate about building dynamic, scalable web applications and delivering high-quality digital solutions.</p></div>
      </div>
      <div className='flex flex-col bg-slate-600 h-[30vh]'><div className='flex flex-row block mx-11 p-2'><h2 className=' text-3xl text-white px-2'>Contact </h2><span className='text-cyan-400 text-3xl'>Me</span></div>
      <br className='sm:hidden xl:block' />
      <div className='block mx-2'><p className='inline text-white mx-11 px-2 text-justify'>Email</p><span className='inline text-cyan-400 text-lg'>santhoshkumarcomp@gmail.com</span></div>
      <div className='block mx-2'><p className='inline text-white mx-11 px-2 text-justify'>Email</p><span className='inline text-cyan-400 text-lg'>santonrtnet@gmail.com</span></div>
      <div className='block mx-2'><p className='inline text-white mx-11 px-2 text-justify'>Ph no</p><span className='inline text-cyan-400 text-lg px-2'>6369557279</span></div>
      {/* <div className='block mx-2'><p className='inline text-white mx-11 px-2 text-justify'>Linked In</p><span className='inline text-cyan-400 text-lg'></span></div> */}
      </div>
      <div className='flex flex-col bg-slate-800  h-[25vh] rounded-b-2xl'><div className='flex flex-row block mx-11 p-2'>
      <br className='sm:hidden lg:block' />
        
        <h2 className=' text-3xl text-white px-2'>Follow </h2><span className='text-cyan-400 text-3xl'>Me</span></div>
      
      <div className= 'icon flex flex-row mx-10 '>
      <div ><a href="https://www.linkedin.com/in/santhosh-kumar-r-63277531a/"><img src={linked} alt="" className= 'icon1 inline align-middle lg:w-15 lg:h-15 rounded-full sm:w-6 sm:h-6 md:w-12 md:h-12 drop-shadow-lg drop-shadow-cyan-500/50 border-dashed border-white border-2 m-5 p-3 md:m-2 md:p-1' /></a></div>
      <div className= 'inline'><a href="https://github.com/santhoshkumarcomp"><img src={git} alt="" className= ' icon2 inline align-middle lg:w-15 lg:h-15 rounded-full sm:w-6 sm:h-6 md:w-12 md:h-12 drop-shadow-lg drop-shadow-cyan-500/50 border-dashed border-white border-2 m-5 p-3 md:m-2 md:p-1' /></a></div>
      <div className= 'inline'><a href="https://www.instagram.com/santhoshravi008/"><img src={insta} alt="" className= ' icon3 inline align-middle lg:w-15 lg:h-15 rounded-full sm:w-6 sm:h-6 md:w-12 md:h-12 drop-shadow-lg drop-shadow-cyan-500/50 border-dashed border-white border-2 m-5 p-3 md:m-2 md:p-1' /></a></div>
      </div>
      </div>
      </div>
    </div>
    )
}

export default App
