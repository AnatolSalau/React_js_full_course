import {Link, useParams} from "react-router-dom";
import dataPatients from "../data/patients.json";
import NotFound from "./NotFound";

function Patient() {

      const {slug} = useParams();
      const findPatientBySLug = dataPatients.find((patient) => {
                  return patient.slug === slug;
            }
      )
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
      }
}

export default Patient;