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
export default reducer;