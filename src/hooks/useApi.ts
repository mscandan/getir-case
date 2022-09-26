/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const useApi = <T>(
  url: string,
  options: any,
  utilities?: {
    onError: (e: Error) => void;
  },
): { data: T; isLoading: boolean } => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchFromApi = async () => {
    try {
      const response = await fetch(url, options);
      const result = (await response.json()) as any;
      setData(result);
    } catch (err) {
      if (utilities && typeof utilities.onError === 'function') {
        utilities.onError(err as Error);
      }
    }

    setLoading(false);
  };

  React.useEffect(() => {
    fetchFromApi();
  }, []); // eslint-disable-line

  return { data: data as T, isLoading: loading };
};
