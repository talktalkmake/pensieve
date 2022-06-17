import { useState } from 'react';
import ACTION from '../actions/ACTION';
import moment from 'moment';

function Item({ dispatch, id, done, label, date }) {
    const [editItemId, setEditItemId] = useState(false);
    return (
        <>
            <div className='flex justify-center items-center'>
                <span className='opacity-30 mr-1'>{moment(date).format('YY')}</span>
                <span className='opacity-60 mr-1'>{moment(date).format('MM')}</span>
                <span className='strong font-medium mr-4'>{moment(date).format('DD')}</span>
            </div>
            <div className='border-l-2 pl-4 border-l-cyan-500 cursor-pointer'>
                {editItemId === id
                    ? <input type='text'
                        onBlur={() => setEditItemId(false)}
                        defaultValue={label}
                        onChange={e => dispatch({ type: ACTION.EDITITEM, id, newLabel: e.target.value })}
                        className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                    :
                    <span onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id: id })}
                        className={`${done ? 'line-through text-slate-600' : ''} w-60`}>
                        {label}
                    </span>
                }
            </div>
            <span onClick={() => setEditItemId(id)} className='ml-4 opacity-50 hover:opacity-100 cursor-pointer'>
                {!done && <span className='font-sans'>✏</span>}
            </span>
        </>
    );
}
export default Item;