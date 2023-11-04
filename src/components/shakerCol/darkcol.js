import React from "react";
import './shakerCol.css';

const DarkCol = ({darkColName}) => {
  return(
    <div className={`dark-col ${darkColName}`}></div>
  )
}

export default React.memo(DarkCol);