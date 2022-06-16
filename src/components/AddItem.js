import { useState } from 'react';
import ACTION from '../actions/ACTION';

function AddItem({ dispatch }) {
    const [newItemText, setNewItemText] = useState('');
    const [newItem, setNewItem] = useState(false);
    const handleNewItem = (label) => {
        dispatch({ type: ACTION.ADDNEWITEM, label })
        setNewItem(false);
    }

    return (
        <>
            {
                newItem
                    ? <>
                        <input onChange={e => setNewItemText(e.target.value)} value={newItemText} type='text' className='bg-transparent border-2 border-cyan-500 px-4 py-2 rounded block' />
                        <button onClick={() => handleNewItem(newItemText)} className='border-2 bg-cyan-500 border-cyan-500 text-cyan-900 rounded px-4 py-2 block'>Add new item</button>
                    </>

                    : <button onClick={() => setNewItem(true)} className='border-2 border-cyan-500 bg-cyan-500 rounded px-2 text-black'>Add new item</button>
            }
        </>
    );
}
export default AddItem;