import {Link, useParams} from "react-router-dom";
import dataPatients from "../data/patients.json";

function Patient() {

      const {slug} = useParams();
      const findPatientBySLug = dataPatients.find((patient) => {
                  return patient.slug === slug;
            }
      )

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