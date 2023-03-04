import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectItems } from '../../app/rootSlice';
import styles from './Inbox.module.css';
import { Button } from '@fluentui/react-components';
import { useNavigate } from "react-router-dom";

export function Inbox() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const navigate = useNavigate();

    const navigateToAddNewItem = function(){
        navigate("/inbox/workflow");
    };

    return (
        <>
            <h1>Inbox</h1>
            <Button appearance="primary" onClick={navigateToAddNewItem}>
                Add New Workflow
            </Button>
            <div>{items.length}</div>
            <table>
                <thead>
                    <th>
                        Key
                    </th>
                    <th>
                        Employee
                    </th>
                    <th>
                        Comment
                    </th>
                </thead>
                <tbody>
                    {items.map((item) =>
                        <tr key={item.key}>
                            <td>
                                {item.key}
                            </td>
                            <td>
                                {item.employee}
                            </td>
                            <td>
                                {item.comment}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};