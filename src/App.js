import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    openMenu: false
  };

  openNav = () => {
    this.setState({
      openMenu: true
    });
  };

  toggleNav = () => {
    this.setState({
      openMenu: !this.state.openMenu
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="pimg1">
          {/* <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="./img/mainLogo.svg" fill="#000" />
          </svg> */}
          <img className="logo" src={require("/img/mainLogo.svg")} alt="logo" />
        </div>

        <section className="section section-light">
          <h2>Who Am I?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint
            rerum accusamus commodi veniam ipsa magni dolor placeat iusto,
            tenetur deserunt? Adipisci recusandae eum et, accusantium ab
            eligendi itaque quisquam commodi ipsum error odio eius voluptatibus,
            nulla est nemo iste reprehenderit id asperiores officiis autem
            incidunt minus a quaerat. Vel asperiores sint omnis, reiciendis odio
            quos numquam repellat consequuntur officia nobis ab earum nulla rem
            qui, quis ea repellendus cupiditate! Dolore itaque exercitationem
            maxime ullam corrupti? Officia similique delectus quis hic
            recusandae odio placeat eaque autem omnis inventore. Adipisci nobis
            modi animi sed tenetur error soluta optio, repellendus qui
            excepturi?
          </p>
        </section>
        <div className="pimg2">
          <div className="ptext">
            <span className="border">Image two text</span>
          </div>
        </div>
        <section className="section section-light">
          <h2>My Experience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint
            rerum accusamus commodi veniam ipsa magni dolor placeat iusto,
            tenetur deserunt? Adipisci recusandae eum et, accusantium ab
            eligendi itaque quisquam commodi ipsum error odio eius voluptatibus,
            nulla est nemo iste reprehenderit id asperiores officiis autem
            incidunt minus a quaerat. Vel asperiores sint omnis, reiciendis odio
            quos numquam repellat consequuntur officia nobis ab earum nulla rem
            qui, quis ea repellendus cupiditate! Dolore itaque exercitationem
            maxime ullam corrupti? Officia similique delectus quis hic
            recusandae odio placeat{" "}
          </p>
        </section>
        <div className="pimg2">
          <div className="ptext">
            <span className="border">Image Three text</span>
          </div>
        </div>
        <section className="section section-light">
          <h2>Section three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint
            rerum accusamus commodi veniam ipsa magni dolor placeat iusto,
            tenetur deserunt? Adipisci recusandae eum et, accusantium ab
            eligendi itaque quisquam commodi ipsum error odio eius voluptatibus,
            nulla est nemo iste reprehenderit id asperiores officiis autem
            incidunt minus a quaerat. Vel asperiores sint omnis, reiciendis odio
            quos numquam repellat consequuntur officia nobis ab earum nulla rem
            qui, quis ea repellendus cupiditate! Dolore itaque exercitationem
            maxime ullam corrupti? Officia similique delectus quis hic
            recusandae odio placeat{" "}
          </p>
        </section>
        <div className="pimg2">
          <div className="ptext">
            <span className="border">Image Three text</span>
          </div>
        </div>
        <section className="section section-light">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint
            rerum accusamus commodi veniam ipsa magni dolor placeat iusto,
            tenetur deserunt? Adipisci recusandae eum et, accusantium ab
            eligendi itaque quisquam commodi ipsum error odio eius voluptatibus,
            nulla est nemo iste reprehenderit id asperiores officiis autem
            incidunt minus a quaerat. Vel asperiores sint omnis, reiciendis odio
            quos numquam repellat consequuntur officia nobis ab earum nulla rem
            qui, quis ea repellendus cupiditate! Dolore itaque exercitationem
            maxime ullam corrupti? Officia similique delectus quis hic
            recusandae odio placeat{" "}
          </p>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
