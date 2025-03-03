import { useState } from 'react'


type UserType = {
    name: string,
    email: string,
    phone: string
}

export default function LoginCheck() {
    const [user, setUser] = useState<UserType | null>({} as UserType);

    const handleLogin = () => {
        setUser({
            name: 'Ehlullah',
            email: 'ee@hotmail.com',
            phone: '05555555555'
        });
    };
    const handleLogOut = () => {
        setUser({} as UserType);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>
                <p>{user?.name}</p>
                <p>{user?.phone}</p>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}
