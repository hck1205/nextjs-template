import { register } from './thunks';

export default (builder) =>
  builder
    //register
    .addCase(register.pending, (state) => {
      state.isLoading = true;
      state.isAuthChecked = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthChecked = true;
      state.userInfo = action?.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = true;
      state.isAuthChecked = false;
      state.error = action?.payload;
    });
