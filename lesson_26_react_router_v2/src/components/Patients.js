import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import {useState} from "react";

import rawPatients from '../data/patients.json'
import PatientCard from "./PatientCard";
import SortedPanel from "./SortedPanel";


function Patients() {
      console.log("-------------------Render : Пациенты-------------------");

      const SORTS_KEYS = ['id', 'slug', 'title', 'measure'];

      function toSortPatients(patients, key) {
            if (!key || !SORTS_KEYS.includes(key)) {
                  return patients;
            }
            const sortedCourses = [...patients];
            sortedCourses.sort((a, b) => {
                  return a[key] > b[key] ? 1 : -1;
            });
            return sortedCourses;
      }

      //get navigate
      //const navigate = useNavigate();

      //get location ()
      /*
            {pathname: '/patients', sort: '?search=measure', hash: '', state: null, key: 'default'}
       */
      const location = useLocation();

      //get query
      /*
            {sort: 'measure'}
       */
      const query = queryString.parse(location.search);

      //initialize state by useState for key for sort
      /*
            measure
       */

      let [sortKey, setSortKey] = useState(query.sort);


      const onChangeFilter = (text) => {
            setSortKey(text);
      };

      return (
            <>
                  <SortedPanel labels={SORTS_KEYS} onClick={onChangeFilter}/>
                  {
                        (sortKey && SORTS_KEYS.includes(sortKey))
                              ? <h1>{`Пациенты отсортированные по ${sortKey}`}</h1>
                              : <h1>Все пациенты:</h1>
                  }
                  {
                        toSortPatients(rawPatients, sortKey).map((patient => {
                              return <PatientCard key={patient.id}  {...patient}/>
                        }))
                  }
            </>
      );
}

export default Patients;