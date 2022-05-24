import { useReducer, useState } from 'react';
import './css/app.css';

const ACTION = {
  'TOGGLEDONE': 'toggleDone',
  'CHANGETORED': 'changeToRed',
  'ADDNEWITEM': 'addNewItem'
}

const initialState = [
  {
    id: 1,
    done: false,
    label: 'Pay electiric bill'
  },
  {
    id: 2,
    done: true,
    label: 'Take Lady for a walk'
  },
  {
    id: 3,
    done: false,
    label: 'Water cuttings'
  },
]

const reducer = (state, action) => {

  const { id } = action;

  switch (action.type) {

    case 'toggleDone':
      return [...state.map(item => item.id === id ? { ...item, done: !item.done } : item)];

    case 'addNewItem':
      return [...state, { id: state.length + 1, done: false, label: action.label }]

    default:
      return [...state];
  }
}

function App() {

  const [list, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState(false);
  const [newItemText, setNewItemText] = useState('');

  const handleNewItem = (label) => {
    dispatch({ type: ACTION.ADDNEWITEM, label })
    setNewItem(false);
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-slate-900 text-cyan-50'>
        <div className='p-8 border-l-2 border-l-cyan-500'>
          <h3 className='sm:-ml-64'>Monday, May 23, 2022</h3>
          <ul>
            {list.map(({ id, done, label }, i) =>
              <li key={i} className='cursor-pointer hover:bg-red-500' onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id: id })}>
                {done ? <span>✔</span> : <span className='opacity-10'>✔</span>}
                <span className={done ? 'line-through text-slate-600' : ''}>{label}</span>
              </li>
            )}
          </ul>
          <footer className='mt-6'>
            {
              newItem
                ? <>
                  <input onChange={e => setNewItemText(e.target.value)} value={newItemText} type='text' className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                  <button onClick={() => handleNewItem(newItemText)} className='border-2 bg-cyan-500 border-cyan-500 text-cyan-900 rounded px-4 py-2 block'>Add new item</button>
                </>

                : <button onClick={() => setNewItem(true)} className='border-2 border-cyan-500 rounded px-4 py-2'>Add new item</button>
            }
          </footer>
        </div>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </>
  );
}

export default App;

const getIndexOfItem = (state, index) => state.findIndex(item => item.id === index);
const getSingleItemById = (state, id) => state.filter(item => item.id === id)[0]