import "./view.css";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useSelector } from "react-redux";
function View() {
  const employees = useSelector((state) => state.employees.employees);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = renderHeader();

  return (
    <section className="createEmployee">
      <div id="employee-div" className="container">
        <Link to="/" className="link">
          Create Employee
        </Link>
        <fieldset>
          <legend>Current Employee</legend>

          <DataTable
            value={employees}
            paginator
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            tableStyle={{ minWidth: "50rem" }}
            filters={filters}
            filterDisplay="row"
            dataKey="id"
            header={header}
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink  RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column field="firstName" header="First Name" sortable></Column>
            <Column field="lastName" header="Last Name" sortable></Column>
            <Column field="startDate" header="Start Date" sortable></Column>
            <Column field="department" header="Department" sortable></Column>
            <Column
              field="dateOfBirth"
              header="Date of Birth"
              sortable
            ></Column>
            <Column field="street" header="Street" sortable></Column>
            <Column field="city" header="City" sortable></Column>
            <Column field="state" header="State" sortable></Column>
            <Column field="zipCode" header="Zip Code" sortable></Column>
          </DataTable>
        </fieldset>
      </div>
    </section>
  );
}

export default View;
