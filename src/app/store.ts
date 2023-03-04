import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import workflowReducer from "../features/workflow/workflowSlice";

export const store = configureStore({
    reducer: {
        workflow: workflowReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;