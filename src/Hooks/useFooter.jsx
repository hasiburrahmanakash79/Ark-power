import React from 'react';
import { useQuery } from 'react-query';

const useFooter = () => {
    const { data: footerContent = [],isLoading, refetch } = useQuery(["FooterContent"], async () => {
        const res = await fetch("http://localhost:3000/footer");
        return res.json();
      });
      return { footerContent, isLoading, refetch };
};

export default useFooter;