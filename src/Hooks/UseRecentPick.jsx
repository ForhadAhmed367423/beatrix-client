import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseRecentPick = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: recentPickData = [] , refetch} = useQuery({
        queryKey: ['recentpick'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/recentpick`)
            return res.data;
        }
    })
    return [recentPickData,refetch]
};

export default UseRecentPick;