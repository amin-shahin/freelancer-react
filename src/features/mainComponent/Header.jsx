import useUser from "../authentication/useUser"

function Header() {
    const { data:{user}, isLoading } = useUser();
    console.log(user);
    
  return (
    <div className="col-span-4 bg-secondary-0 border-b border-secondary-200 px-8 py-4">header</div>
  )
}

export default Header