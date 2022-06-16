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
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);

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
                  <Item dispatch={dispatch} id={id} done={done} label={label} />
                </li>
              )}
            </ul>
            <footer className='mt-6'>
              <AddItem dispatch={dispatch} />
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