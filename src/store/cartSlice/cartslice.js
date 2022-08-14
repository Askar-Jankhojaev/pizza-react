import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../client";

export const postPizza = createAsyncThunk(
  "cartProducts/postPizza",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.post(`/cartProducts`, payload);
      if (response.status === 201) {
        dispatch(postPizzaReducer(response.data))
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } 
  }
);

export const getCartPizza = createAsyncThunk(
  "cartProducts/getCartPizza",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.get(`/cartProducts?${data.category && `category=${data.category}`}&q=${data.searchPizza}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCartPizza = createAsyncThunk(
  "cartProducts/deleteCartPizza",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.delete(`/cartProducts/${id}`);
      if (response.status === 200) {
        dispatch(deletePizzaReducer(id))
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCartObshiy = createAsyncThunk(
  "cartProducts/deleteCartPizza",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.delete(`/cartProducts/${id}`);
      if (response.status === 200) {
        dispatch(deletePizzaObshiyReducer(id))
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPizzaCount = createAsyncThunk(
  "cartProducts/editPizzaCount",
  async ( payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.put(`/cartProducts/${payload.id}`, payload);
      if(response.status ===200){
        dispatch(editPizzaCountReducer(response.data))
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const initialState = {
  cartProducts: [],
  cartProductsLoading: false,
  cartProductsError: null,
  cartPizzaLoading : false,
  queryStringCart: {
    searchPizza: "",
    category: null
  }
};

const cartProductsSlice = createSlice({
  name: "cartPizzas",
  initialState,
  reducers: {
    deletePizzaReducer: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(pizza => pizza.id !== payload);
    },
    deletePizzaObshiyReducer: (state) => {
      state.cartProducts = [];
    },
    postPizzaReducer: (state, { payload }) => {
      state.cartProducts = [...state.cartProducts, payload]
    },
    editPizzaCountReducer: (state, { payload }) => {
      const findElIndex = state.cartProducts.findIndex(pizza => pizza.id === payload.id);
      state.cartProducts[findElIndex].pizzaCount = payload.pizzaCount
    },

    handleSearch: (state, {
      payload
    }) => {
      state.queryStringCart.searchPizza = payload;
    },
    handleCategory: (state, {
      payload
    }) => {
      state.queryStringCart.category = payload;
    }

  },
  extraReducers: {
    [postPizza.pending]: (state) => {
      state.cartProductsLoading = true;
      state.cartProductsError = null;
    },
    [postPizza.fulfilled]: (state, { payload }) => {
      state.cartProductsLoading = false;
      state.cartProductsError = null;
    },
    [postPizza.rejected]: (state, { payload }) => {
      state.cartProductsLoading = false;
      state.cartProductsError = payload;
      state.cartProducts = [];
    },


    [getCartPizza.pending]: (state) => {
      state.cartProductsLoading = true;
      state.cartProductsError = null;
    },
    [getCartPizza.fulfilled]: (state, { payload }) => {
      state.cartProductsLoading = false;
      state.cartProductsError = null;
      state.cartProducts = payload;
    },
    [getCartPizza.rejected]: (state, { payload }) => {
      state.cartProductsLoading = false;
      state.cartProductsError = payload;
      state.cartProducts = [];
    },

    [deleteCartPizza.pending]: (state) => {
      state.cartPizzaLoading = true;
      state.cartProductsError = null;
    },
    [deleteCartPizza.fulfilled]: (state, { payload }) => {
      state.cartPizzaLoading = false;
      state.cartProductsError = null;
    },
    [deleteCartPizza.rejected]: (state, { payload }) => {
      state.cartPizzaLoading = false;
      state.cartProductsError = payload;
    },
  },
});

export default cartProductsSlice.reducer;
export const { 
  deletePizzaReducer, 
  postPizzaReducer, 
  editPizzaCountReducer, 
  deletePizzaObshiyReducer,
  handleSearch,
  handleCategory 
} = cartProductsSlice.actions