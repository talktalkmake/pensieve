import { useReducer, useState } from 'react';
import moment from 'moment';
import './css/app.css';
import Item from './components/Item';
import reducer from './reducers/reducer';
import initialState from './initialState';
import AddItem from './components/AddItem';

function App() {
  const [list, dispatch] = useReducer(reducer, organizeItemsByDate(initialState));

  return (
    <>
      <h1 className='fixed bottom-2 right-2 text-white'>Pensieve</h1>
      <div className='flex justify-center items-center h-screen bg-slate-900 text-cyan-50 font-mono'>
        <article className='flex flex-col sm:flex-row'>
          <ul>
            {list.map(({ id, done, label, date }, i) =>
              <li key={i} className='flex py-2'>
                <Item dispatch={dispatch} id={id} done={done} label={label} date={date} />
              </li>
            )}
          </ul>
          <footer className='mt-6'>
            <AddItem dispatch={dispatch} />
          </footer>
        </article>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </>
  );
}

export default App;

const getIndexOfItem = (state, index) => state.findIndex(item => item.id === index);
const getSingleItemById = (state, id) => state.filter(item => item.id === id)[0]