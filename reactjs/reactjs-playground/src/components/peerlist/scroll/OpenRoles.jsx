import JobCard from "./JobCard";

function OpenRoles(props) {
    console.log(props);
    

    console.log(props.openRolesData)

    return (
        <div className="w-[350px] h-[400px] bg-white">
            <div className="flex justify-between p-3">
                <h2>Open Roles</h2>
                <p>{"->"}</p>
            </div>
            <div>
                {
                    props.openRolesData.map((ele)=>(
                        <JobCard jobTitle={ele}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OpenRoles;