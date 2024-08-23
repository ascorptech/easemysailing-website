const page = ({ params }:
   { params: { id: string , name:string } }) => {
  return (
    <><div>My Post: {params.id}</div>
    <div>my name :{params.name}</div></>
  )
}

export default page