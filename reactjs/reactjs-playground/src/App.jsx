import OpenRoles from "./components/peerlist/scroll/OpenRoles.jsx";

function App() {

  const dummyOpenRoles = ["frontend engineer", "backend engineer", "ux/ui designer", "product manager", "cto", "ceo", "coo"];


  return (
    <div className="bg-red-200 h-screen w-screen flex items-center justify-center">
      <OpenRoles openRolesData={dummyOpenRoles}/>
    </div>
  )
}

export default App;