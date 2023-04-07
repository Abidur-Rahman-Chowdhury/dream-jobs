import { createApi,fatchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';

const apiSlice = createApi({
  reducerPath: 'api',
    baseQuery: fatchBaseQuery({}),
    endpoints: (builder) => {
      
  }
});
