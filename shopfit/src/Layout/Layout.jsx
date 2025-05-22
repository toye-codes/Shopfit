import Header from "../Components/Header/Header";
// import Sidebar from "";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
}
