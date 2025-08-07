import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/MainLayout.scss";

function MainLayout() {
  return (
    <div className="mainLayout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default MainLayout;
