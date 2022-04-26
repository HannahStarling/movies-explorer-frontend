import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' />
      </Routes>
    </>
  );
}

export default App;
