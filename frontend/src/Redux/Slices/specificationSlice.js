import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSpecification: null,
};

const specificationSlice = createSlice({
  name: 'specification',
  initialState,
  reducers: {
    setSelectedSpecification: (state, action) => {
      state.selectedSpecification = action.payload;
    },
  },
});

export const { setSelectedSpecification } = specificationSlice.actions;
export default specificationSlice.reducer;
