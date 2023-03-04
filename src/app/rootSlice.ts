import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from './store';

export interface WorkflowItem {
    key?: number,
    employee: string,
    comment: string
};

export interface WorkflowState {
    newItem: WorkflowItem,
    items: Array<WorkflowItem>
};

const initialState: WorkflowState = {
    newItem: { employee: "", comment: "" },
    items: []
};

export const workflowSlice = createSlice({
    name: "workflow",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<WorkflowItem>) => {
            state.items = [...state.items, {
                key: state.items.length + 1,
                employee: action.payload.employee,
                comment: action.payload.comment
            }];
            state.newItem.employee = "";
            state.newItem.comment = "";
        },
        setNewItemEmployee: (state, action: PayloadAction<string>) => {
            state.newItem.employee = action.payload;
        },
        setNewItemComment: (state, action: PayloadAction<string>) => {
            state.newItem.comment = action.payload;
        }
    }
});

export const { addItem, setNewItemEmployee, setNewItemComment } = workflowSlice.actions;
export const selectItems = (state: RootState): WorkflowItem[] => state.workflow.items;
export default workflowSlice.reducer;