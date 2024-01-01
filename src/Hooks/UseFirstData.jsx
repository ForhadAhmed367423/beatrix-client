import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const useFirstData = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: FirstData = [] , refetch} = useQuery({
        queryKey: ['first'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/first`)
            return res.data;
        }
    })
    return [FirstData,refetch]
};

export default useFirstData;