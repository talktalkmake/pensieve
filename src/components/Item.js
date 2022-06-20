import { useState } from 'react';
import ACTION from '../actions/ACTION';
import moment from 'moment';

function Item({ dispatch, date, id, done, label }) {
    const [editItemId, setEditItemId] = useState(false);
    return (
        <article>
            {editItemId === id
                ? <input type='text'
                    onBlur={() => setEditItemId(false)}
                    defaultValue={label}
                    onChange={e => dispatch({ type: ACTION.EDITITEM, id, newLabel: e.target.value })}
                    className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                :
                <span onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id, date })}
                    className={`${done ? 'line-through text-slate-600' : ''} ml-4 w-60`}>
                    {label}
                </span>
            }
            <span onClick={() => setEditItemId(id)} className='ml-4 opacity-50 hover:opacity-100 cursor-pointer'>
                {done && <span className='font-sans'>✏</span>}</span>
        </article>
    );
}
export default Item;