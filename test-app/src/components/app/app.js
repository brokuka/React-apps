import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 1, name: 'John C.', salary: 800, increase: true, rise: true},
        {id: 2, name: 'Alex M.', salary: 1200, increase: false, rise: true},
        {id: 3, name: 'Carl W.', salary: 3000, increase: false, rise: false}
      ],
      term: '',
      filter: 'default'
    }

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    })
  }

  onToggle = (id, stateProp) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [stateProp]: !item[stateProp]}
        }

        return item
      })
    }))
  }

  searchEmp = (arr, term) => {
    if (term.length === 0) return arr;

    return arr.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  searchFilter = (items, filter) => {
    switch(filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'more':
        return items.filter(item => item.salary > 1000)
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  onChangeSalary = (id, salary) => {
    console.log(salary)
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) return {...item, salary}

        return item;
      })
    }))
  }

  render() {
    const {data, term, filter} = this.state,
          employees = data.length,
          increasedEmployees = data.filter(item => item.increase).length,
          visibleData = this.searchFilter(this.searchEmp(data, term), filter);

    return (
      <div className="app container">
          <AppInfo employees={employees} increasedEmployees={increasedEmployees}/>

          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>

          <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggle={this.onToggle}
          onChangeSalary={this.onChangeSalary}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;
