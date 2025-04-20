import { useEffect, useState } from "react";

const User = () => {
    const [count] = useState(0);

    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>Name: Sushi</h1>
            <p>Email: sushmitha.g@gmail.com</p>
            <p>Phone: 8989898989</p>
        </div>
    )
}

export default User;