import Main from '../containers/main/main'
import Layout from './layout'

export default function Home({data}) {


  return (
    <Layout>
      <Main data={data} />
    </Layout>
  )
}


export async function getServerSideProps(){
  // let data = await fetch("https://fakestoreapi.com/products")
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  return {props: { data }}
}