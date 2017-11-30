import React, { Component } from 'react';
import './App.css';

const marked = require("marked");
const defaultText = "Heading\n==================\nSubheading\n------------------\n### This is an H3\n###### This is an H6\n\nParagraphs are separated by empty lines.\n\n*Italic*\n**bold**\n~~strikethrough text~~\n\nUnordered List\n* Item 1\n* Item 2\n* Item 3\n\nOrdered List\n1. Step 1\n2. Step 2\n3. Step 3\n\n\nAll the best\n\n  *[Zi Wei Zhang](https://ziweidream.github.io/)*";
class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {markdown: defaultText};
    this.handleChange = this.handleChange.bind(this);
}

handleChange(markdown) {
    this.setState({markdown}); 
}
  render() {
    let {markdown} = this.state;
    function createM(markdown) { return {__html: marked(markdown)}; }
    return (
      <div id="markdown" className="App" class="constainer">
            <div class="col-md-1"/>
            <div id="text" class="col-md-5 form-group">
              <textarea class="form-control" rows="20" value={markdown} onChange={(e)=>this.handleChange(e.target.value)}/>
            </div> 
            <div class="col-md-1"/>
            <div id="display" class="col-md-5">       
              <div dangerouslySetInnerHTML={createM(markdown) } />
            </div>
           
      </div>
    );
  }
}

export default App;
