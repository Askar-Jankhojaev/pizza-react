import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../client";

export const getPizza = createAsyncThunk(
  "pizzas/getPizza",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.get(`/pizzas?${data.category && `category=${data.category}`}&q=${data.searchPizza}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  productsLoading: false,
  productsError: null,
  queryString: {
    searchPizza: "",
    category: null
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleSearch: (state, {
      payload
    }) => {
      state.queryString.searchPizza = payload;
    },
    handleCategory: (state, {
      payload
    }) => {
      state.queryString.category = payload;
    }
  },
  extraReducers: {
    [getPizza.pending]: (state) => {
      state.productsLoading = true;
      state.productsError = null;
    },
    [getPizza.fulfilled]: (state, { payload }) => {
      state.productsLoading = false;
      state.productsError = null;
      state.products = payload;
    },
    [getPizza.rejected]: (state, { payload }) => {
      state.productsLoading = false;
      state.productsError = payload;
      state.products = [];
    },
  },
});

export const { handleCategory, handleSearch } = productsSlice.actions
export default productsSlice.reducer;
