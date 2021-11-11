import React from "react";
import { useNavigate } from "react-router";
import Input from "./template";
const Form = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/request`);
  };

  return (
    <form className="App" onSubmit={onSubmit}>
      <label className="lab">
        phone number
        <Input />
      </label>
      <label>
        password
        <input
          type="password"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Неправильный номер телефона или пароль"
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
