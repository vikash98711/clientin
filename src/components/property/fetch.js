import axios from "axios";
import { url } from "../URL/Url";
import { SidebarContext } from "../../context/sidebarContext";
import { useContext } from "react";

const { setProjects, setLoading } = useContext(SidebarContext);

export const getAllProjects = async () => {
    try {
      const response = await axios.get(`${url}/api/project/get/all`);
      if (response.data && response.data.length > 0) {
        setProjects(response.data);
      } else {
        setProjects([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
