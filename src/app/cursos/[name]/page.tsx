const PageSingleCourse = async ({
  params,
}: {
  params: Promise<{ name: string }>
}) => {
  const name = (await params).name

  return ( 
    <div> { name } </div>
   );
}
 
export default PageSingleCourse;