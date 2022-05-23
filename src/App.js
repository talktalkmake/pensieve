import { useState } from 'react';
import './css/app.css';

const initialState = [
  {
    'done': false,
    'label': 'Pay electiric bill'
  },
  {
    'done': false,
    'label': 'Take Lady for a walk'
  },
  {
    'done': false,
    'label': 'Water cuttings'
  },
]

function App() {

  const [list, setList] = useState(initialState);

  return (
    <div className='flex justify-center items-center h-screen bg-slate-900 text-cyan-50'>
      <div className='pl-8 border-l-2 border-l-cyan-500'>
        <h3 className='bg-slate-900 -ml-64'>Monday, May 23, 2022</h3>
        <ul>
          {list.map(item =>
            <li key={item.label}>{item.label}</li>
          )}
        </ul>
        <footer className='mt-6'>
          <button className='border-2 border-cyan-500 rounded px-4 py-2'>Add new item</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
