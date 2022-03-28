import { Link } from "react-router-dom";
import { Session } from "./style";

export default function SessionTimes({ id, name }) {
  return (
    <Link to={`/assentos/${id}`}>
      <Session>
        {name}
      </Session>
    </Link>
  );
}