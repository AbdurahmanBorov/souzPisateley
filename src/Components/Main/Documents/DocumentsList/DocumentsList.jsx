import React from 'react';
import list from '../../../../img/Main/list.svg'

const DocumentsList = () => {
  return (
    <div className="regulatory-documents_list">
      <img src={list} alt="list" />
      <span>Устав Российского союза писателей</span>
    </div>
  );
};

export default DocumentsList;