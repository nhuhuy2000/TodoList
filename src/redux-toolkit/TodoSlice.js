import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    status: "idle",
    filters: {
      search: "",
      filter: "all",
    },
    todoList: [],
  },
  reducers: {
    // ADD_TODO: (state, action) => {
    //   state.todoList = [...state.todoList, action.payload];
    // },
    // REMOVE_TODO: (state, action) => {
    //   state.todoList = [
    //     state.todoList.filter((item) => {
    //       return item.id !== action.payload;
    //     }),
    //   ];
    // },
    // //
    // EDIT_TODO: (state, action) => {
    //   state.todoList = [
    //     state.todoList.filter((item) => {
    //       return item.id !== action.payload.id;
    //     }),
    //     action.payload,
    //   ];
    // },

    FETCH_DATA: (state, action) => {
      state.todoList = action.payload;
    },
    //
    SEARCH_TODO: (state, action) => {
      state.filters.search = action.payload;
    },
    //
    FILTER_TODO: (state, action) => {
      state.filters.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = "idle";
      })
      .addCase(saveTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todoList.push(action.payload);
        toast.success("Thêm thành công");
      })
      .addCase(saveTodo.rejected, (state, action) => {
        state.status = "idle";
        toast.error(action.payload);
      })
      .addCase(editTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const todoUpdate = action.payload;

        state.status = "idle";
        state.todoList = state.todoList.map((item) => {
          return item.id === todoUpdate.id ? todoUpdate : item;
        });

        toast.success("Cập nhật Todo thành công!");
      })
      .addCase(editTodo.rejected, (state) => {
        toast.error("Cập nhật thất bại!");
        state.status = "idle";
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "loading";
        state.todoList = action.payload;
        toast.success("Xóa todo thành công!");
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "loading";
        toast.error(action.payload);
      });
  },
});
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (filters) => {
    const { search, filter } = filters;
    const response = await axios.get(
      `http://localhost:8080/todo/search?keyword=${search}&filter=${filter}`
    );
    const data = response ? response.data : [];
    return data;
  }
);
export const saveTodo = createAsyncThunk(
  "todo/saveTodo",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8080/todo/new", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const editTodo = createAsyncThunk(
  "todo/editTodo",
  async (data, thunkAPI) => {
    try {
      const { id, state } = data;
      const response = await axios.put(
        `http://localhost:8080/todo/update/${id}`,
        state
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (data, thunkAPI) => {
    try {
      const { id, filter, search } = data;
      const response = await axios.delete(
        `http://localhost:8080/todo/delete/${id}?keyword=${search}&filter=${filter}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
