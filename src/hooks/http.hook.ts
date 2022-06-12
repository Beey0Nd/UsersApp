import { useCallback } from "react";

interface RequestProps {  
    url: string
    method?: string
    body?: string | null
    headers?: HeadersInit   
}

interface HttpAPI {
    request: ({
        url, 
        method, 
        body, 
        headers
    }: RequestProps) => never | Promise<any>
}

export const useHttp = (): HttpAPI | never => {
    const request = useCallback(async (
        {
            url, 
            method = 'GET', 
            body = null, 
            headers = {'Content-Type': 'application/json'}
        }: RequestProps) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data: Promise<any> = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);

    return {request}
}