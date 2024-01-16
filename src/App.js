import './App.css';
import TagsInput from './components/TagsInput';
import { ChipComponentContextProvider } from './config/chipComponentContext';

function App() {
  return (
    <ChipComponentContextProvider>
    <div className='app'>
      <h2 className='label'>Pick Users</h2>
      <TagsInput/>
    </div>
    </ChipComponentContextProvider>
  );
}

export default App;
