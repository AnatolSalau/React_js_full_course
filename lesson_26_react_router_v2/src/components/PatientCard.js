import {Link} from "react-router-dom";

function PatientCard({id, slug, title, measure}) {
      return (
            <div>
                  <Link to={`${slug}`}>{title}</Link>
            </div>
      );
}

export default PatientCard;