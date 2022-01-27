import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggle, onChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
            onChangeSalary={(e) => onChangeSalary(id, +e.target.value.slice(0, -1))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;