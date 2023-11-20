import * as React from 'react';
import { useRouter } from 'next/router';
export interface  PostsParamsProps {
}

export default function PostsParams (props:  PostsParamsProps) {
  const router = useRouter();
  return (
    <div>
      <h1>
        Post Params Page
      </h1>
      <p>Querry: {JSON.stringify(router.query)}</p>
    </div>
  );
}
