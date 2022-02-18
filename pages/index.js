import useSWR from "swr"

const fetcher = (...args)=> fetch(...args).then(res=> res.text())

export default function Home(){

  const { data, error } = useSWR('/api/cookies', fetcher);
  
  if(!data) return <h1>Loading...</h1>
  if(error) return <h1>Filed to Load</h1>
  else return <h1>Cookie from response: {data}</h1>
}