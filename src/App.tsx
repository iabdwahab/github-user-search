import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  return (
    <div className="min-h-screen px-2 bg-dark-blue">
      <div className="max-w-3xl mx-auto pt-10">
        <Header />
        <div className="mt-6">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
