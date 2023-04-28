import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export const LButton = (props) => {
  const [textcontent, setTextcontent] = useState("");

  // at first render do this
  useEffect(() => {
    const myval = localStorage.getItem("lutzValue");
    setTextcontent(myval);
  }, []);

  const handleButton = () => {
    console.log("Button clicked: ", textcontent);

    localStorage.setItem("lutzValue", textcontent);
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setTextcontent(event.target.value);
  };

  return (
    <div>
      <br />
      <br />
      Textcontent: {textcontent}
      <br />
      <br />
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={textcontent}
        onChange={handleTextChange}
      />
      <br />
      <br />
      <br />
      <Button variant="contained" onClick={handleButton}>
        {props.myname}
      </Button>
    </div>
  );
};
