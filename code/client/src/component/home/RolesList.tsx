import { useEffect } from "react";
import RolesAPI from "../../service/roles_api";

const RolesList = () => {
    useEffect(() => {
        new RolesAPI().selectAll();
        
    }, []);
    
    return <>yolo</>;
}
export default RolesList;
