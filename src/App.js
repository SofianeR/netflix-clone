import "./App.css";

import data from "./assets/data.json";
import picture from "./assets/img/Netflix-logo.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header id="header">
        <img src={picture} alt="" />
      </header>
      {/* {data.map((item, index) => {
        return (
          <div className="carroussel-container" key={index}>
            <p className="carroussel-title">{item.category}</p>
            <div className="carroussel">
              {item.images.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} alt="" />;
                  </div>
                );
              })}
            </div>
          </div>
        );
      })} */}
      {data.map((item, index) => {
        console.log(item.images);

        return (
          <Section key={index} category={item.category} img={item.images} />
        );
      })}
      <footer></footer>
    </div>
  );
}

export default App;
