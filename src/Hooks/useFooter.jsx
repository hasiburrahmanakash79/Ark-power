import React from 'react';
import { useQuery } from 'react-query';

const useFooter = () => {
    const { data: footerContent = [],isLoading, refetch } = useQuery(["FooterContent"], async () => {
        const res = await fetch("https://ark-power-server.vercel.app/footer");
        return res.json();
      });
      return { footerContent, isLoading, refetch };
};

export default useFooter;