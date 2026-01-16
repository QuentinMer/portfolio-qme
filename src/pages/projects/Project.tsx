import { useParams } from "react-router-dom";
import Horecaseek from "./Horecaseek";
import Rhumer from "./Rhumer";

const Project = () => {
  const { slug } = useParams<{ slug: string }>();

  switch (slug) {
    case "horecaseek":
      return <Horecaseek />;

    case "rhumer":
      return <Rhumer />;

    default:
      return null; // ou une page 404 projet
  }
};

export default Project;