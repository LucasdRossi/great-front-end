import { useNavigate } from "react-router-dom";

import "./header.css";

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav>
          <button onClick={() => navigate(-1)}>Return</button>
        </nav>
      </header>
      {props.children}
    </>
  );
}

export function withHeader<P extends JSX.IntrinsicAttributes>(
  Component: () => React.ReactNode
) {
  return (props: P) => (
    <Header>
      <Component {...props} />
    </Header>
  );
}
