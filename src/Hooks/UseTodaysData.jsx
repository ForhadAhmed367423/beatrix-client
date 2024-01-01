import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseTodaysData = () => {
    
    const axiosPublic = UseAxiosPublic();
    const { data: todaysData = [] , refetch} = useQuery({
        queryKey: ['todays'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todays`)
            return res.data;
        }
    })
    return [todaysData,refetch]
};

export default UseTodaysData;