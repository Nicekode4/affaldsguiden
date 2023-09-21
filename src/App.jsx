import Approuter from './Approuter/Approuter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import usePageTitle from './Components/PageWrapper/PageTitle';
import { GlobalStyle } from './Global.style';
import wave from './Images/Layout/bg-waves-1.svg'

function App() {
  usePageTitle()
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
          <Approuter /> 
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;
