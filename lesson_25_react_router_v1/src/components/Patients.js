import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {useEffect, useState} from "react";

import coursesData from '../data/patients.json'
import PatientCard from "./PatientCard";
import SortedPanel from "./SortedPanel";

const SORTS_KEYS = ['id', 'slug', 'title', 'measure'];

function sortCourses(courses, key) {
      if (!key || !SORTS_KEYS.includes(key)) {
            return courses;
      }
      const sortedCourses = [...courses];
      sortedCourses.sort((a, b) => {
            return a[key] > b[key] ? 1 : -1;
      });
      return sortedCourses;
}

function Patients() {
      //get navigate
      const navigate = useNavigate();

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

      //initialize new state: sortedCourses by useState
      let [sortedCourses, setSortedCourses] = useState(
            sortCourses(coursesData, sortKey)
      );

      useEffect(() => {
            if (!SORTS_KEYS.includes(sortKey)) {
                  navigate('.');
                  //set sortKey by null
                  /*
                  setSortKey(null);
                  console.log(sortedCourses);
                  setSortedCourses([...coursesData]);
                  console.log(sortedCourses);
                  */
            }
      }, [sortKey, navigate]);

      return (
            <>
                  <SortedPanel labels={SORTS_KEYS}/>
                  {
                        (sortKey && SORTS_KEYS.includes(sortKey))
                              ? <h1>{`Пациенты отсортированные по ${sortKey}`}</h1>
                              : <h1>Все пациенты:</h1>
                  }
                  {
                        sortedCourses.map((patient => {
                              return <PatientCard key={patient.id}  {...patient}/>
                        }))
                  }
            </>
      );
}

export default Patients;