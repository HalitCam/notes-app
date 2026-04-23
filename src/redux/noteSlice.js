import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment';

const loadState = () => {
    try {
        const data = localStorage.getItem("notes");
        return data
            ? JSON.parse(data)
            : {
                pink: [],
                green: [],
                blue: [],
                black: []
            };
    } catch {
        return {
            pink: [],
            green: [],
            blue: [],
            black: []
        };
    }
};

const saveState = (state) => {
    localStorage.setItem("notes", JSON.stringify(state));
};

const noteSlice = createSlice({
    name: "note",
    initialState: loadState(),
    reducers: {
        addPink: (state, action) => {
            state.pink.push({
                date: moment().format("DD/MM/YYYY"),
                text: action.payload
            });
            saveState(state);
        },
        addGreen: (state, action) => {
            state.green.push({
                date: moment().format("DD/MM/YYYY"),
                text: action.payload
            });
            saveState(state);
        },
        addBlack: (state, action) => {
            state.black.push({
                date: moment().format("DD/MM/YYYY"),
                text: action.payload
            });
            saveState(state);
        },
        addBlue: (state, action) => {
            state.blue.push({
                date: moment().format("DD/MM/YYYY"),
                text: action.payload
            });
            saveState(state);
        },

    },

}
)

export const { addBlue, addBlack, addGreen, addPink } = noteSlice.actions;
export default noteSlice.reducer;