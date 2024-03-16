import { withHeader } from "../../components/Header";
import StarRating from "./components/StarRating";

function StarRatingPage() {
  return (
    <main>
      <StarRating />
    </main>
  );
}

export default withHeader(StarRatingPage);
