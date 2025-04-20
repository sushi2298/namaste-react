import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setStatus] = useState(true);
    const setOnline = () => setStatus(true);
    const setOffline = () => setStatus(false);
    useEffect(() => {

        addEventListener("online", setOnline);

        addEventListener("offline", setOffline);

        return () => {
            removeEventListener("online", setOnline);
            removeEventListener("offline", setOffline);
        }
    }, [])
    return onlineStatus;
}

export default useOnlineStatus;