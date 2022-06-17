import { useState } from 'react';
import ACTION from '../actions/ACTION';

function Item({ dispatch, id, done, label }) {

    const [editItemId, setEditItemId] = useState(false);
    return (
        <>
            <span className={`${done ? undefined : `opacity-5`} flex justify-center items-center px-4`}>✔</span>
            <span className='opacity-30 mr-1'>{moment(date).format('YY')}</span>
            <span className='opacity-60 mr-1'>{moment(date).format('MM')}</span>
            <span className='strong font-medium mr-4'>{moment(date).format('DD')}</span>
            <div className='border-l-2 border-l-cyan-500'>
                {editItemId === id
                    ? <input type='text'
                        onBlur={() => setEditItemId(false)}
                        defaultValue={label}
                        onChange={e => dispatch({ type: ACTION.EDITITEM, id, newLabel: e.target.value })}
                        className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                    :
                    <span onClick={() => dispatch({ type: ACTION.TOGGLEDONE, id: id })}
                        className={`${done ? 'line-through text-slate-600' : ''} ml-4 w-60`}>
                        {label}
                    </span>
                }
            </div>
            <span onClick={() => setEditItemId(id)} className='ml-4 opacity-50 hover:opacity-100'>{!done && <span className='font-sans'>✏</span>}</span>
        </>
    );
}
export default Item;