import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UsePickTodays = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: picktodaysData = [] , refetch} = useQuery({
        queryKey: ['picktodays'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/picktodays`)
            return res.data;
        }
    })
    return [picktodaysData,refetch]
};

export default UsePickTodays;