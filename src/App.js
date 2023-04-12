import './App.css';
import Row from './components/Row';
import categories from './api';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Banner />

      {categories.map(category => 
        <Row key={category.name} title={category.title} path={category.path} />
      )}
    </>
  );
}

export default App;
