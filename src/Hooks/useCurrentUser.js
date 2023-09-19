import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useCurrentUser = ()=>{
    const {user} = useAuth()
    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`)
            return res.json()
        }        
    })
    return [users]
}
export default useCurrentUser;