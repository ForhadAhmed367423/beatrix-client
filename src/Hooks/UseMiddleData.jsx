import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMiddleData = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: MiddleData = [] , refetch} = useQuery({
        queryKey: ['middle'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/middle`)
            return res.data;
        }
    })
    return [MiddleData,refetch]
};

export default UseMiddleData;