import * as React from 'react';
import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';

export interface  PostsDetailProps {
  data: [{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }];
}
export async function getServerSideProps() {
  // const router = useRouter();
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data = await res.json()
  // console.log(data)
  // Pass data to the page via props
  return { props: { data: data  } }
}
export default function PostsDetail (props:  PostsDetailProps) {
  const {data}= props;
  console.log(data)
  const router = useRouter();
  return (
    <>
    <div>
      <h1>
        Post Detail Page 
      </h1>
      <p>Querry: {JSON.stringify(router.query)}</p>
      
    </div>
    {
      data.map(item=>{
        return (
          <h1 key={item.id}>${item.title}</h1>
        )
      })
    }
    </>

    
  );
}
