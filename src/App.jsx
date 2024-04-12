import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { FooterWithSocialLinks } from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterWithSocialLinks />
    </>
  );
}

export default App