import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Styles/form.css";
const Form = ({ userregister, updateinfo, Update, setupdateinfo, setclose, close}) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    if (updateinfo) {
      Update(updateinfo.id, data);
      setupdateinfo();
    } else {
      userregister(data);
    }
  };

  useEffect(() => {
    reset(updateinfo);
  }, [updateinfo]);

  const handelcloseexit = () => {
    setclose(true)
  }

  return (
    <div className={`container ${close && 'close'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h3 className="form_tittle">{updateinfo ? "Update User Information": "Create New user"}</h3>
        <span onClick={handelcloseexit} className="form_exit">x</span>
        <div className="form_item">
          <label className="form_label" htmlFor="email">
            Email
          </label>

          <input
            className="form_input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>

        <div className="form_item">
          <label className="form_label" htmlFor="password">
            Password
          </label>

          <input
            className="form_input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>

        <div className="form_item">
          <label className="form_label" htmlFor="first_name">
            First Name
          </label>

          <input
            className="form_input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>

        <div className="form_item">
          <label className="form_label" htmlFor="last_name">
            Last Name
          </label>

          <input
            className="form_input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>

        <div className="form_item">
          <label className="form_label" htmlFor="birthday">
            Birthday
          </label>

          <input
            className="form_input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>

        <button onClick={handelcloseexit} className="form_btn">{updateinfo ? "update" : "create"}</button>
      </form>
    </div>
  );
};

export default Form;
