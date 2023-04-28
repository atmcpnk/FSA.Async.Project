import React from "react";

const Account = () => {
    const username = users.find((user) => user.email === email)?.username;
    
    return (
        <>
            <div>
                <h1>Welcome, {username}</h1>
            </div>
        </>
    )
};

export default Account;