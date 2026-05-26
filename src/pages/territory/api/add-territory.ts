import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Territory } from "../types/territories";

import { showSuccessMessage, showErrorMessage } from '../../../utils/notifications';
const BASE_URL = 'https://6a1405126c7db8aac053ae15.mockapi.io/territories';



function useAddTerritory(onSuccess?: (payload: any) => void, onError?: (error: any) => void) {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (territory: Territory) =>{
         const response=    await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(territory)
        })
        if(!response.ok){
         throw new Error(`Error: ${response.status}`);
            
        }
        },

        
        onSuccess: async (data) => {

            
          
            showSuccessMessage('Territory added successfully!')
              if (onSuccess) onSuccess(data);
          queryClient.invalidateQueries({ queryKey: ['get-territories'] });
        },
        onError: (error:any) => {
      
            const errorMessage=error?.message || 'Failed to add Territoryx. Please try again.';
             showErrorMessage(errorMessage)
                   if (onError) onError(error);

        }
    });

    return { mutate, isPending };
}


export default useAddTerritory