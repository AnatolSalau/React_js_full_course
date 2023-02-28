import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import {useState} from "react";

import coursesData from '../data/patients.json'

import PatientCard from "./PatientCard";

function sortCourses(courses, key) {
      const sortedCourses = [...courses];
      sortedCourses.sort((a, b) => {
            return a[key] > b[key] ? 1 : -1;
      });
      return sortedCourses;
}

function Patients() {
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

      //get key
      /*
            measure
       */
      let [sortKey, setSortKey] = useState(query.sort);


      let [sortedCourses, setSortedCourses] = useState(
            sortCourses(coursesData, sortKey)
      );

      return (
            <>
                  <h1>Все пациенты:</h1>
                  {
                        sortedCourses.map((patient => {
                              return <PatientCard key={patient.id}  {...patient}/>
                        }))
                  }
            </>
      );
}

export default Patients;