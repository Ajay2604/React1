import './App.css';
import { BrowserRouter as Routers, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

function App() {
  return (
    <Routers>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route path="" element={<LaunchIndex/>}/>
          <Route path=":slug" element={<LaunchShoe/>}/>
        </Route>
        
          <Route path="*" element={<NoPageFound/>}/>
      </Routes>
    </Routers>

  );
}
export default App;

function Home() {
  return (<div><h1>This is home</h1></div>)
};

function Launch(){
  return(<div>
    <h1>Launch</h1>
    <Outlet/>
    </div>)
};

function LaunchIndex(){
  return(
    <>
    <ul>
      {Object.entries(shoes).map(([slug,{name,img}])=> 
      <li key={slug}>
        <Link to={`/Launch/${slug}`} >
        <h2>{name}</h2>
        <img src={img} alt={name} />
        </Link>
      </li>)}
    </ul>
    </>
  )
};

function LaunchShoe(){
  const {slug} = useParams();
  const shoe = shoes[slug];
  if(!shoe){
    return <h2>Shoe Not found</h2>
  }
  const {name, img} = shoe;
  return(
    <div><h2>{name}</h2>
    <img src={img} alt={name} />
    </div>
  )
};

function NoPageFound(){
 return( <h1>No page Found</h1>)
}
const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};