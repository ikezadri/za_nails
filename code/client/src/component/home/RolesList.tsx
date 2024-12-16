import { useEffect, useState } from "react";
import RolesAPI from "../../service/roles_api";
import Roles from "../../model/roles.ts"

const RolesList = () => {
    useEffect(() => {

        const [roles,setRoles] = useState<>([]);



        new RolesAPI().selectAll().then((results) => setRoles(results.data));
    }, []);
    
    return <>yolo</>;
}
export default RolesList;
