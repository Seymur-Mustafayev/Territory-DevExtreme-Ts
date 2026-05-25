import { useQuery } from "@tanstack/react-query";
import type { Territory } from "../types/territories";

const BASE_URL = 'https://6a1405126c7db8aac053ae15.mockapi.io/territories';

export default function useTerritories() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-territories'],
        queryFn: async () => {
            const res = await fetch(BASE_URL);
            return res.json() as Promise<Territory[]>;
        }
    });

    return {
        data: data ?? [] as Territory[],
        isLoading
    };
}