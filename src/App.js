import { useReducer, useState } from 'react';
import moment from 'moment';
import './css/app.css';
import Day from './components/Day';
import Item from './components/Item';
import reducer from './reducers/reducer';
import initialState from './initialState';
import AddItem from './components/AddItem';
import organizeItemsByDate from './functions/organizeItemsByDate';

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 className='fixed bottom-2 right-2 text-white'>Pensieve</h1>
      <Day />
      <div className='flex flex-col justify-center items-center h-screen bg-slate-900 text-cyan-50 font-mono'>
        {list.map(day =>
          <article className='mt-4 flex flex-col sm:flex-row sm:min-w-[30rem]'>
            <div className='flex justify-center items-center'>
              <span className='opacity-30 mr-1'>{getPeriod(day.date, 0)}</span>
              <span className='opacity-60 mr-1'>{getPeriod(day.date, 1)}</span>
              <span className='strong font-medium mr-4'>{getPeriod(day.date, 2)}</span>
            </div>
            <div className='border-t-2 pt-4
              sm:pl-4 sm:pt-0 border-t-cyan-500 sm:border-l-2 sm:border-t-0 sm:border-l-cyan-500 cursor-pointer'>
              {day.items.map(item =>
                <Item dispatch={dispatch} date={day.date} id={item.id} done={item.done} label={item.label} />
              )}
            </div>
          </article>
        )}
        <footer className='mt-6'>
          <AddItem dispatch={dispatch} />
        </footer>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </>
  );
}

export default App;

const getIndexOfItem = (state, index) => state.findIndex(item => item.id === index);
const getSingleItemById = (state, id) => state.filter(item => item.id === id)[0]
const getPeriod = (date, part, delimiter = '/') => date.split(delimiter)[part]