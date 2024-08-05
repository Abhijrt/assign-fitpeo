import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <main className='bg-black w-screen block max-w-full'>
        <MainBody />
      </main>
    </div>
  );
}

export default App;
