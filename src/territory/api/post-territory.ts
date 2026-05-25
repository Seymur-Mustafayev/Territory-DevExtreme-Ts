import { useMutation } from "@tanstack/react-query";
import type { Territory } from "../types/territories";

const BASE_URL = 'https://6a1405126c7db8aac053ae15.mockapi.io/territories';

export default function usePostTerritory() {
    const { mutate, isPending } = useMutation({
        mutationFn: async (territory: Territory) => await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(territory)
        })
    });

    return { mutate, isPending };
}