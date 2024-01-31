import './App.css';
import Sidebar from './sidebarParent/sidebar';
import Searchbar from './searchbarParent/searchbar';
import Homecalc from './homecalcParent/homecalc';
import Cartcontainer from './cartcontainerParent/cartcontainer';
import Bannercontainer from './bannercontainerParent/bannercontainer';
import Bodycontainer from './bodycontainerParent/bodycontainer';

function App() {
  return (
    <div className="container">
      <Sidebar />

    <div className='main-content'>
      <Searchbar />
      <Homecalc />
      <Cartcontainer />

    <div className='banner-container'>
      <Bannercontainer />
      <Bodycontainer />
      
    </div>
    </div>
    </div>
  );
}

export default App;
