import { useState } from "react";

function useRequest() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = async (url = "https://jsonplaceholder.typicode.com/users", method = "GET", body = null, headers = {"Content-Type":"application/json"}) => {
        setLoading(true);

        try {
            const res = await fetch(url, {method, body, headers});

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            const data = await res.json();
            return data.map(item => {
                return {
                    name: item.name,
                    username: item.username,
                    email: item.email,
                    street: item.address.street,
                    city: item.address.city,
                    zipcode: item.address.zipcode,
                    phone: item.phone,
                    website: item.website,
                    id: item.id,
                    company: item.company.name
                }
            })
        } catch(e) {
            setLoading(false);
            setError(true);
            throw e;
        }
    }

    return {request, loading, setLoading, error};
}

export default useRequest;