import {Link, useNavigate, useParams} from "react-router-dom";
import dataPatients from "../data/patients.json";
import {useEffect} from "react";

/**
 * We show different patients depending
 * on which parameter is on the way
 */
function Patient() {
      //Get path param from url
      //<Route path="patients/:slug" element={<Patient/>}/>
      const {slug} = useParams();

      const navigate = useNavigate();

      const findPatientBySLug = dataPatients.find((patient) => {
                  return patient.slug === slug;
            }
      )
      //First example <Link to="..">
      /*
      if (findPatientBySLug) {
            return (
                  <div>
                        <h1>Персональная страница пациента</h1>
                        <p>{findPatientBySLug.title}</p>
                        <p>{findPatientBySLug.measure}</p>
                        <Link to="..">Вернуться на главную страницу</Link>
                  </div>
            );
      } else {
            return <div>
                  <NotFound text="Пациент не найден"/>
            </div>
      }*/

      //Second example simply navigate by useNavigate() and useEffect hooks
      useEffect(() => {
            if (!findPatientBySLug) {
                  navigate('..', {relative: 'path'});
            }
      }, [findPatientBySLug]);

      return (
            <div>
                  <h1>Персональная страница пациента</h1>
                  <p>{findPatientBySLug.title}</p>
                  <p>{findPatientBySLug.measure}</p>
                  <Link to="..">Вернуться на главную страницу</Link>
            </div>
      );
}

export default Patient;