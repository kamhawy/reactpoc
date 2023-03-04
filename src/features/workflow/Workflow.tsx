import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addItem, setNewItemEmployee, setNewItemComment } from '../../app/rootSlice';
import { useNavigate } from "react-router-dom";

import {
    makeStyles,
    shorthands,
    useId,
    Input,
    Label,
    InputProps,
    Button
} from "@fluentui/react-components";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        ...shorthands.gap("2px"),
        maxWidth: "400px",
    },
});

export function Workflow(props: InputProps) {
    const dispatch = useAppDispatch();
    const newItem = useAppSelector(state => state.workflow.newItem);
    const navigate = useNavigate();

    const inputId_employee = useId("input_employee");
    const inputId_comment = useId("input_comment");
    const styles = useStyles();

    const handleAddNewItem = function () {
        dispatch(addItem(newItem));
        navigate("/inbox");
    };

    return (
        <>
            <div className={styles.root}>
                <Label htmlFor={inputId_employee} size={props.size} disabled={props.disabled}>
                    Employee
                </Label>
                <Input id={inputId_employee} value={newItem.employee} {...props} onChange={(e) => dispatch(setNewItemEmployee(e.target.value))} />
            </div>
            <div className={styles.root}>
                <Label htmlFor={inputId_comment} size={props.size} disabled={props.disabled}>
                    Comment
                </Label>
                <Input id={inputId_comment} value={newItem.comment} {...props} onChange={(e) => dispatch(setNewItemComment(e.target.value))} />
            </div>
            <Button appearance='primary' onClick={handleAddNewItem}>
                Save New Item
            </Button>
        </>
    );
};