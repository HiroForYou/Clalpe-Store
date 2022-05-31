import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Buscar Productos..."
        className="mr-sm-2 ml-sm-5"
      ></FormControl>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2 search-button"
      >
        Buscar
      </Button>
    </Form>
  );
};

export default SearchBox;
