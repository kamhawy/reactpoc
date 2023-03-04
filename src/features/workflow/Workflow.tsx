import React, { Component, useState } from 'react';
import type { RootState } from '../../app/store';

import { useSelector } from 'react-redux';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addItem, selectItems, setNewItemEmployee, setNewItemComment } from './workflowSlice';
import styles from './Workflow.module.css';

export function Workflow() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    let newItem = useAppSelector(state => state.workflow.newItem);

    return (
        <>
            <div>
                <label>Employee</label>
                <input
                    title='Employee'
                    value={newItem.employee}
                    onChange={(e) => dispatch(setNewItemEmployee(e.target.value))}>
                </input>
            </div>
            <div>
                <label>Comment</label>
                <input
                    title='Comment'
                    value={newItem.comment}
                    onChange={(e) => dispatch(setNewItemComment(e.target.value))}>
                </input>
            </div>
            <button
                onClick={() => {
                    dispatch(addItem(newItem));
                }}>
                Test
            </button>
            <div>{items.length}</div>
            <ul>
                {items.map((item) =>
                    <li key={item.key}>
                        {item.employee}
                    </li>
                )}
            </ul>
        </>
    );
};