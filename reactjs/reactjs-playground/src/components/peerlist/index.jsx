import OpenRoles from "./scroll/OpenRoles";

function PeerlistApp() {

  const dummyOpenRoles = ["frontend engineer", "backend engineer", "ux/ui designer", "product manager", "cto", "ceo", "coo"];


  return (
    <div className="bg-red-200 h-screen w-screen flex items-center justify-center">
      <OpenRoles openRolesData={dummyOpenRoles}/>
    </div>
  )
}

export default PeerlistApp;