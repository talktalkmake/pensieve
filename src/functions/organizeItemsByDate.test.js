import initialState from "../initialState";
import organizeItemsByDate from "./organizeItemsByDate";

describe('Organize items by date', () => {
    it('Shows items in chronological order', () => {
        expect(organizeItemsByDate(initialState)[0].label)
            .toEqual('Pay electiric bill');
    });
});