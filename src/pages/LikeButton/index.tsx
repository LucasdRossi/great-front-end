import { withHeader } from "../../components/Header";

import LikeButton from "./components/LikeButton";

function LikeButtonPage() {
  return (
    <main style={{ marginTop: 10 }}>
      <LikeButton />
    </main>
  );
}

export default withHeader(LikeButtonPage);
