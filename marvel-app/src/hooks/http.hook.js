import { useState, useCallback } from "react";

export default function useHttp() {
    const   [loading, setLoading] = useState(false),
            [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {
        setLoading(true);

        try {
            const   response = await fetch(url, {method, body, headers}),
                    data = await response.json();

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            setLoading(false);

            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);

            throw error;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, error, request, clearError}
}