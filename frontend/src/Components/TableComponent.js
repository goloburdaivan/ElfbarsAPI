import React, { Component } from 'react';
const TableComponent = ( { elfbars } ) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Taste</th>
                    <th>Amount</th>
                    <th>Channel ID</th>
                    <th>Message ID</th>
                    <th>Redact</th>
                </tr>
            </thead>
            <tbody>
                {elfbars.map((elfbar) => {
                    return (<tr key={elfbar.id}>
                        <td>{elfbar.category.title}</td>
                        <td>{elfbar.taste.title}</td>
                        <td>{elfbar.count}</td>
                        <td>{elfbar.category.message_id}</td>
                        <td>{elfbar.category.tg_chat_id}</td>
                        <td class="action"><a href={`/edit-elfbar/${elfbar.id}`}>✎</a></td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
}
export default TableComponent;