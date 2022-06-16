import { useState } from 'react';
import ACTION from '../actions/ACTION';

function Item({ dispatch, id, done, label }) {

    const [editItemId, setEditItemId] = useState(false);
    return (
        <>
            {done ? <span>✔</span> : <span className='opacity-10'>✔</span>}
            {editItemId === id
                ? <input type='text' onBlur={() => setEditItemId(false)} onChange={e => dispatch({ type: ACTION.EDITITEM, id, newLabel: e.target.value })} className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                : <span onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id: id })} className={`${done ? 'line-through text-slate-600' : ''} ml-4 w-60`}>{label}</span>
            }
            <span onClick={() => setEditItemId(id)} className='ml-4 opacity-50 hover:opacity-100'>{!done && <span className='font-sans'>✏</span>}</span>
        </>
    );
}
export default Item;