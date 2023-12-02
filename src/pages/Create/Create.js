import "./create.css";
import { Link } from "react-router-dom";
import Datas from "../../datas/Datas.json";
// import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "modal-sp";
import "modal-sp/dist/components/modal.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../../reducers/employeeSlice";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Dropdown } from "custom_dropdown_comp";

export default function CreateEmployee() {
  //modal
  const modalParameter = {
    backgroundColor: "#47560b",
    borderRadius: 10,
    boxShadow: "0 0 5px #1B1919",
    color: "#1B1919",
    fontSize: 18,
    height: "fit-content",
    padding: "250px 150px",
    width: "fit-content",
  };
  const [modal, setModal] = useState(false);

  //redux
  const dispatch = useDispatch();

  const compteur = useSelector((state) => state.employees.employees.length);

  //Datepicker
  //https://reactdatepicker.com/
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const elements = form.elements;

    const employee = {
      id: compteur,
      firstName: elements.firstName.value,
      lastName: elements.lastName.value,
      dateOfBirth: elements.dateOfBirth.value,
      startDate: elements.startDate.value,
      street: elements.street.value,
      city: elements.city.value,
      state: elements.states.value,
      zipCode: elements.zipCode.value,
      department: elements.department.value,
    };

    dispatch(addEmployee(employee));
    setModal(!modal);
    form.reset();
    setDateOfBirth("");
    setStartDate("");
  };

  return (
    <section className="createEmployee">
      <div className="container">
        <Link to="/view" className="link">
          View Current Employees
        </Link>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Create Employee</legend>

            <div className="label-input">
              <label className="first-name" htmlFor="first-name">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                required="required"
                aria-labelledby="first-name"
                aria-describedby="first-name"
                aria-required="true"
              />
            </div>

            <div className="label-input">
              <label className="last-name" htmlFor="last-name">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                required="required"
                aria-labelledby="last-name"
                aria-describedby="last-name"
                aria-required="true"
              />
            </div>

            <div className="label-input">
              <label className="date-of-birth" htmlFor="date-of-birth">
                Date of Birth
              </label>

              <DatePicker
                id="date-of-birth"
                type="date"
                name="dateOfBirth"
                required="required"
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
              />
            </div>

            <div className="label-input">
              <label className="start-date" htmlFor="start-date">
                Start Date
              </label>

              <DatePicker
                id="start-date"
                type="date"
                name="startDate"
                required="required"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <fieldset className="address">
              <legend>Address</legend>
              <div className="label-input">
                <label className="street" htmlFor="street">
                  Street
                </label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  required="required"
                  aria-labelledby="street"
                  aria-describedby="street"
                  aria-required="true"
                />
              </div>

              <div className="label-input">
                <label className="city" htmlFor="city">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required="required"
                  aria-labelledby="city"
                  aria-describedby="city"
                  aria-required="true"
                />
              </div>

              <div className="label-input">
                <label className="state" htmlFor="state">
                  State
                </label>

                <Dropdown
                  textLabel="states"
                  name="states"
                  data={Datas.States}
                />
              </div>
              <div className="label-input">
                <label className="zip-code" htmlFor="zip-code">
                  Zip Code
                </label>
                <input
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  required="required"
                  min={0}
                  aria-labelledby="zip-code"
                  aria-describedby="zip-code"
                  aria-required="true"
                />
              </div>
            </fieldset>
            <div className="label-input">
              <label className="department" htmlFor="departement">
                Department
              </label>

              <Dropdown
                textLabel="Department"
                name="department"
                data={Datas.Departments}
              />
            </div>
            <button className="button">Save</button>
          </fieldset>
        </form>
      </div>

      <Modal
        message="Employee Created !"
        parameter={modalParameter}
        modal={modal}
        setModal={setModal}
      />
    </section>
  );
}
