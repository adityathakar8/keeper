import React from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';




function CreateArea(props) {
  const [collapse, collapser] = React.useState(false);
  const [title, changeTitle] = React.useState("");
  const [content, changeContent] = React.useState("");


  function makeChange(event) {
    if (event.target.name === "title") {
      changeTitle(event.target.value);
    } else if (event.target.name === "content") {
      changeContent(event.target.value);
    }
  }

  function adder(event) {
    props.addToArray([title, content]);
    axios.post("http://localhost:5000/",{title, content}).then(res=>{
      console.log(res);

    })
    changeTitle("");
    changeContent("");
    event.preventDefault();
  }

  function changer() {
    collapser(true);

  }

  return ( <
    div >
    <
    form   > {
      collapse && < input
      onChange = {
        makeChange
      }
      name = "title"
      placeholder = "Title"
      value = {
        title
      }
      />} <
      textarea
      onChange = {
        makeChange
      }
      onClick = {
        changer
      }
      name = "content"
      value = {
        content
      }
      placeholder = "Take a note..."
      rows = {
        collapse ? 3 : 1
      }
      />   <
      button onClick={adder}> < AddIcon / > < /button>   < /
      form > <
      /div>
    );
  }

  export default CreateArea;
