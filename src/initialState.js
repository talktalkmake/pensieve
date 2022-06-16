const today = new Date();
const yesterday = new Date(Date.now() - 24 * 3600 * 1000);
const initialState = [
    {
        id: 2,
        date: today,
        done: true,
        label: 'Take Lady for a walk'
    },
    {
        id: 1,
        date: yesterday,
        done: false,
        label: 'Pay electiric bill'
    },
    {
        id: 3,
        date: today,
        done: false,
        label: 'Water cuttings'
    },
];
export default initialState;