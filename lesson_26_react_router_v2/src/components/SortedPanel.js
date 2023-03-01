import style from './SortedPanel.module.css'
import {Link} from "react-router-dom";

function SortedPanel({labels, onClick}) {
      return (
            <div className={style.sortedPanel}>
                  {
                        labels.map((label, index) => {
                              return (
                                    <Link to={`/patients?sort=${label}`} key={index}>
                                          <button onClick={(event) => {
                                                onClick(event.target.innerHTML)
                                          }}
                                          >
                                                {label}
                                          </button>
                                    </Link>
                              )
                        })
                  }
            </div>
      )
}

export default SortedPanel;