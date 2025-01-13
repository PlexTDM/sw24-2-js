import { useState, useEffect } from 'react';

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        navigator.onLine ? setIsOnline(true) : setIsOnline(false);

        console.log(isOnline)
    }, [isOnline]);

    return (
        <div>
            <h5>{isOnline ? 'Online' : 'Offline'}</h5>
        </div>
    );
};

export default OnlineStatus;