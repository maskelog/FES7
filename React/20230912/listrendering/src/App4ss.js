import React, { useState } from 'react';

export default function UserList() {
    const [expandedUserId, setExpandedUserId] = useState(null);

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ];

    const toggleUser = (id) => {
        if (expandedUserId === id) {
            setExpandedUserId(null);
        } else {
            setExpandedUserId(id);
        }
    };

    return (
        <div>
          <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div onClick={() => toggleUser(user.id)}>
                            {user.name}
                        </div>
                        {expandedUserId === user.id && (
                            <div>
                                <p>Email: {user.email}</p>
                                <p>Job: {user.job}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
