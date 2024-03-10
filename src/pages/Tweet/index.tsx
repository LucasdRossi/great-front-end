import { withHeader } from "../../components/Header";
import Tweet from "./components/Tweet";
import type { Props as TweetProps } from "./components/Tweet/Tweet";

const tweetData: TweetProps[] = [
  {
    actions: {
      comments: 400,
      likes: 1000,
      shares: 200,
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco`,
    createdAt: new Date(),
    user: {
      name: "Lucas",
      nickname: "@lucasdRossi",
      profilePicturePath: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  },
  {
    actions: {
      comments: 200,
      likes: 500,
      shares: 1000,
    },
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque`,
    createdAt: new Date(),
    user: {
      name: "Maria",
      nickname: "@mariadSilva",
      profilePicturePath: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
  },
  {
    actions: {
      comments: 300,
      likes: 700,
      shares: 1500,
    },
    content: `Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
    createdAt: new Date(),
    user: {
      name: "João",
      nickname: "@joaodSantos",
      profilePicturePath: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  },
];

function TweetPage() {
  return (
    <main
      style={{
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: 10,
      }}
    >
      {tweetData.map((data) => (
        <Tweet {...data} key={data.user.nickname} />
      ))}
    </main>
  );
}

export default withHeader(TweetPage);
