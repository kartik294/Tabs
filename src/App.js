import "./styles.css";
import Tabs from "./Components/Tabs";

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
];

export default function App() {
  const onTabChangeHandler = (index) => {
    console.log("Tabs changed");
  };
  return (
    <div className="App">
      <Tabs tabsData={tabsData} onChange={onTabChangeHandler} />
    </div>
  );
}
