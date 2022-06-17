import { useState } from 'react';
import ACTION from '../actions/ACTION';

function AddItem({ dispatch }) {
    const [newItemText, setNewItemText] = useState('');
    const [newItem, setNewItem] = useState(false);
    const handleNewItem = (label) => {
        dispatch({ type: ACTION.ADDNEWITEM, label })
        setNewItem(false);
        setNewItemText('');
    }

    return (
        <>
            {
                newItem
                    ? <>
                        <div className='flex'>
                            <input onChange={e => setNewItemText(e.target.value)} value={newItemText} type='text' className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded-tl rounded-bl block' />
                            <button onClick={() => handleNewItem(newItemText)} className='border-2 border-cyan-500 bg-cyan-500 rounded-tr rounded-br px-2 text-slate-900 uppercase font-bold'>Add new item</button>
                        </div>
                    </>
                    : <button onClick={() => setNewItem(true)} className='border-2 border-cyan-500 bg-cyan-500 rounded px-2 text-slate-900 uppercase font-bold'>New item</button>
            }
        </>
    );
}
export default AddItem;