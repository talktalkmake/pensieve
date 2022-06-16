import { useReducer, useState } from 'react';
import moment from 'moment';
import './css/app.css';

const today = new Date();

const initialState = [
  {
    id: 1,
    date: today,
    done: false,
    label: 'Pay electiric bill'
  },
  {
    id: 2,
    date: today,
    done: true,
    label: 'Take Lady for a walk'
  },
  {
    id: 3,
    date: today,
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
      return [...state, { id: state.length + 1, done: false, label: action.label }];

    case 'editItem':
      return [...state.map(item => item.id === id ? { ...item, label: action.newLabel } : item)];

    default:
      return [...state];
  }
}

function App() {

  const [list, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState(false);
  const [newItemText, setNewItemText] = useState('');
  const [editItemId, setEditItemId] = useState(false);
  const [newLabel, setNewLabel] = useState('');

  const handleNewItem = (label) => {
    dispatch({ type: ACTION.ADDNEWITEM, label })
    setNewItem(false);
  }

  return (
    <>
      <h1 className='fixed bottom-2 right-2 text-white'>Pensieve</h1>
      <div className='flex justify-center items-center h-screen bg-slate-900 text-cyan-50 font-mono'>
        <article className='flex flex-col sm:flex-row'>
          <header className='p-8'>
            <h3 className=''>{moment(new Date()).format('DD MM YYYY')}</h3>
          </header>
          <div className='p-8 border-l-2 border-l-cyan-500'>
            <ul>
              {list.map(({ id, done, label }, i) =>
                <li key={i} className='cursor-pointer flex mt-2'>
                  {done ? <span>✔</span> : <span className='opacity-10'>✔</span>}
                  {editItemId === id
                    ? <input type='text' onBlur={() => setEditItemId(false)} onChange={e => dispatch({ type: ACTION.EDITITEM, id, newLabel: e.target.value })} className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                    : <span onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id: id })} className={`${done ? 'line-through text-slate-600' : ''} ml-4 w-60`}>{label}</span>
                  }
                  <span onClick={() => setEditItemId(id)} className='ml-4 opacity-50 hover:opacity-100'>{!done && <span className='font-sans'>✏</span>}</span>
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
        </article>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </>
  );
}

export default App;

const getIndexOfItem = (state, index) => state.findIndex(item => item.id === index);
const getSingleItemById = (state, id) => state.filter(item => item.id === id)[0]