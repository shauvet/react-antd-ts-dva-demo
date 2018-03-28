import * as React from "react";
import * as ReactDOM from "react-dom";

import { Footer } from "./layouts/Footer";

export class Index extends React.Component<any, any> {
  render() {
    return (<div>
      <Footer />
    </div>);
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
