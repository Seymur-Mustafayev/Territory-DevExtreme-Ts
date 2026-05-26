import { useQuery } from "@tanstack/react-query"
import { regionLookups, type Region } from "../types/territory-lookups";




export default function useGetTerritoiresLookups(){
    const {data,isLoading}=useQuery({
        queryKey: ['point-lookups'],
    
         queryFn: async () => regionLookups 
        
    })
    return {
        data: data ?? [] as Region[],
        isLoading
    };
}