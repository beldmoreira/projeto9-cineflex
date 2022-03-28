
import { Link } from "react-router-dom";
import { MoviePosters, MovieStyle } from "./style";

export default function Movie({ id, posterURL, title }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <MovieStyle>
        <MoviePosters src={posterURL} alt={title} />
      </MovieStyle>
    </Link>
  );
}
