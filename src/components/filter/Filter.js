import "./Filter.scss";

const Filter = ({users, setUsers}) => {
    const sortBy = (condition) => {
        const newArr = [...users].sort((a, b) => {
            const x = a[condition].replace(/\W/ig, '').toLowerCase();
            const y = b[condition].replace(/\W/ig, '').toLowerCase();
            if (x > y) return 1;
            if (x < y)  return -1;
            return 0;
        })
        setUsers(newArr)
    }
    return (
		<aside className="filter">
            <h2 className="filter__header">Сортировка</h2>
            <button className="filter__button"
            onClick={() => sortBy("name")}>по имени</button>
            <button id="first" className="filter__button"
            onClick={() => sortBy("city")}>по городу</button>
            <button className="filter__button"
            onClick={() => sortBy("company")}>по компании</button>
		</aside>
    )
}

export default Filter;