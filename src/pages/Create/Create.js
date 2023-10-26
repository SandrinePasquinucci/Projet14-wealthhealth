import "./create.css";
import { Link } from "react-router-dom";

import Datas from "../../datas/Datas.json";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function CreateEmployee() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;

    const employee = {
      firstName: elements.firstName.value,
      lastName: elements.lastName.value,
      dateBirth: elements.dateBirth.value,
      startDate: elements.startDate.value,
      street: elements.street.value,
      city: elements.city.value,
      state: elements.state.value,
      zipCode: elements.city.value,
      department: elements.department.value,
    };
    console.log(employee);
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
                name="dateBirth"
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
    </section>
  );
}
