import "./create.css";
import { Link } from "react-router-dom";
import Datas from "../../datas/Datas.json";
import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "modal-sp";
import "modal-sp/dist/components/modal.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../reducers/employeeSlice";

export default function CreateEmployee() {
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
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees"));

    const compteur = Object.keys(employees).length;

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
      state: elements.state.value,
      zipCode: elements.zipCode.value,
      department: elements.department.value,
    };

    employees.push(employee);
    // Store the input values in the Redux store
    dispatch(addEmployee(employees));

    localStorage.setItem("employees", JSON.stringify(employees));
    setModal(!modal);
    form.reset();
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
              <label className="first-name">First Name</label>
              <input
                type="text"
                id="last-name"
                name="firstName"
                required="required"
              />
            </div>

            <div className="label-input">
              <label className="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                required="required"
              />
            </div>

            <div className="label-input">
              <label className="date-of-birth">Date of Birth</label>
              <input
                id="date-of-birth"
                type="date"
                name="dateOfBirth"
                required="required"
              ></input>
            </div>

            <div className="label-input">
              <label className="start-date">Start Date</label>
              <input
                id="start-date"
                type="date"
                name="startDate"
                required="required"
              />
            </div>

            <fieldset className="address">
              <legend>Address</legend>
              <div className="label-input">
                <label className="street">Street</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  required="required"
                />
              </div>

              <div className="label-input">
                <label className="city">City</label>
                <input id="city" type="text" name="city" required="required" />
              </div>

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
                  required="required"
                  min={0}
                />
              </div>
            </fieldset>
            <div className="label-input">
              <label className="department">Department</label>
              <Dropdown name="department" optionsList={Datas.Departments} />
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
