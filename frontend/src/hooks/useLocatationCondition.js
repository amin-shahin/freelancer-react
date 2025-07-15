import { useLocation } from "react-router";

export function useLocationCondition(url){
    const location = useLocation()
    const isRoute = location.pathname.startsWith(`/${url}`)
    return isRoute;
}