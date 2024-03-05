import { HTMLProps, memo, useState } from "react";
import "./tabs.css";

export interface Tab {
  key: string;
  title: string;
  render: (props: HTMLProps<HTMLDivElement>) => React.ReactNode;
}

export interface Props {
  tabs: Tab[];
  defaultTab?: number;
}

export default memo(function Tabs(props: Props) {
  const { tabs, defaultTab } = props;
  const [activeTab, setActiveTab] = useState(defaultTab ?? 0);

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button
            name={tab.title}
            key={`header-${tab.key}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) =>
          tab.render({
            key: `content-${tab.key}`,
            "aria-hidden": index !== activeTab,
            hidden: index !== activeTab,
          })
        )}
      </div>
    </div>
  );
});
