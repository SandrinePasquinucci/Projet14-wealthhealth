import "./create.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Datas from "../..//datas/Datas.json";
import Dropdown from "../../components/Dropdown/Dropdown";

//Grafikart react-hook-form https://www.youtube.com/watch?v=Ipgf8PLRmY8 Attention valable pour V6
//Pour V7 synthaxe differente https://louisetiennegirard.fr/blog/creer-vos-formulaires-avec-react-hook-form
//hook-form
import { useForm, Controller } from "react-hook-form";
//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  startDate: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipCode: yup.string().required(),
  department: yup.string().required(),
});

export default function CreateEmployee() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    control,
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });
  //mode ontouched pour valider le champs uniquement lorsque je sors du champs
  const { isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = async (newEmployee) => {
    console.log(newEmployee);
    // localStorage.setItem("newEmployee", JSON.stringify(newEmployee));
  };

  return (
    <section className="createEmployee">
      <div className="container">
        <Link to="/view" className="link">
          View Current Employees
        </Link>
        <fieldset>
          <legend>Create Employee</legend>
          <form
            action="#"
            id="create-employee"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="label-input">
              <label className="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                {...register("firstName")}
              />
            </div>
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}
            <div className="label-input">
              <label className="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                {...register("lastName")}
              />
            </div>
            {errors.lastName?.type === "required" && (
              <p role="alert">Last name is required</p>
            )}

            <div className="label-input">
              <label className="date-of-birth">Date of Birth</label>
              <Controller
                control={control}
                name="dateOfBirth"
                render={({ onChange, onBlur, value, name, ref }) => (
                  <DatePicker
                    selected={value}
                    onBlur={onBlur}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            {errors.dateOfBirth?.type === "required" && (
              <p role="alert">Date of birth is required</p>
            )}

            <div className="label-input">
              <label className="start-date">Start Date</label>
              <input
                id="start-date"
                type="text"
                name="startDate"
                {...register("startDate")}
              />
            </div>
            {errors.startDate?.type === "required" && (
              <p role="alert">Start date is required</p>
            )}

            <fieldset className="address">
              <legend>Address</legend>
              <div className="label-input">
                <label className="street">Street</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  {...register("street")}
                />
              </div>
              {errors.street?.type === "required" && (
                <p role="alert">Street is required</p>
              )}

              <div className="label-input">
                <label className="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  {...register("city")}
                />
              </div>
              {errors.city?.type === "required" && (
                <p role="alert">City is required</p>
              )}

              <div className="label-input">
                <label className="state">State</label>
                <Dropdown name="state" optionsList={Datas.States} />
              </div>
              <div className="label-input">
                <label className="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  {...register("zipCode")}
                />
              </div>
              {errors.zipCode?.type === "required" && (
                <p role="alert">Zip code is required</p>
              )}
            </fieldset>
            <div className="label-input">
              <label className="department">Department</label>
              <Dropdown name="department" optionsList={Datas.Departments} />
            </div>
          </form>
        </fieldset>

        <button disabled={isSubmitting} className="button">
          Save
        </button>
      </div>
      {isSubmitSuccessful && (
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      )}
    </section>
  );
}
