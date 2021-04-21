import Navigation from "./Navigation";
import "./header.css";

export default function HeaderContainer() {
  return (
    <div id="header-container">
      <h1 id="header-text">Flatiron Job Search Tracker</h1>
      <Navigation />
    </div>
  );
}
