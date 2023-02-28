import style from './SortedPanel.module.css'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function SortedPanel({labels, changeTextHandler}) {

      const getTextFromTarget = (event) => {
            return event.target.innerHTML;
      }

      return (
            <div className={style.sortedPanel}>
                  {
                        labels.map((label, index) => {
                              return (
                                    <button
                                          key={index}
                                          onClick={(event) => {
                                                changeTextHandler(getTextFromTarget(event))
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