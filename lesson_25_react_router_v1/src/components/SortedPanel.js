import style from './SortedPanel.module.css'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function SortedPanel({labels}) {

      const navigate = useNavigate();

      let [targetText, setTargetText] = useState('');

      const getTextFromTarget = (event) => {
            return event.target.innerHTML;
      }

      useEffect(() => {
            if (targetText) {
                  navigate(`?sort=${targetText}`, {relative: 'path'});
            }
            console.log('useEffect')
      }, [targetText]);

      return (
            <div className={style.sortedPanel}>
                  {
                        labels.map((label, index) => {
                              return (
                                    <button
                                          key={index}
                                          onClick={(event) => {
                                                setTargetText(getTextFromTarget(event))
                                          }}
                                    >
                                          {label}
                                    </button>
                              )
                        })
                  }

            </div>
      )
}

export default SortedPanel;