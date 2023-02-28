import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import {useCallback, useEffect, useState} from "react";

import coursesData from '../data/patients.json'
import PatientCard from "./PatientCard";
import SortedPanel from "./SortedPanel";


function Patients() {
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
      console.log(sortKey);

      //initialize new state: sortedCourses by useState
      let [sortedCourses, setSortedCourses] = useState(
            sortCourses(coursesData, sortKey)
      );

      const onChangeFilter = useCallback((text) => {
            setSortKey(text);
      }, []);


      useEffect(() => {
            /*if (!SORTS_KEYS.includes(sortKey)) {
                   navigate('.');
                   //set sortKey by null

                   setSortKey(sortKey);
                   console.log(sortedCourses);
                   setSortedCourses([...coursesData]);
                   console.log(sortedCourses);

             }*/
            setSortedCourses(sortCourses(coursesData, sortKey));
      }, [sortKey]);

      return (
            <>
                  <SortedPanel labels={SORTS_KEYS} onClick={onChangeFilter}/>
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