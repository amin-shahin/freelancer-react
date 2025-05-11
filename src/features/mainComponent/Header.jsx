import useUser from "../authentication/useUser"

function Header() {
    const { data, isLoading } = useUser();
    const {user} = data || {} 
    
  return (
    <div className="col-span-4 bg-secondary-0 border-b border-secondary-200 px-8 py-4">header</div>
  )
}

export default Header