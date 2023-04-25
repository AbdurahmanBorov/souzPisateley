import React from 'react';
import documentsImg from '../../../img/Main/documentsImg.png'
import './Documents.scss'
import DocumentsList from './DocumentsList/DocumentsList';

const Documents = () => {
  return (
    <section className='documents'>
      <div className="container">
        <h2 className="section-title">Документы</h2>
        <p className="documents-description">Свидетельства о регистрации в Министерстве юстиции Российской Федерации</p>
        <div className="documents-blocks">
          <div className="documents-block">
            <div className="img-block">
              <img src={documentsImg} alt="documentsImg" />
            </div>
            <p className="text-block">
              Свидетельство о регистрации Российского союза писателей как общественной организации в Министерстве юстиции Российской федерации
            </p>
          </div>

          <div className="documents-block">
            <div className="img-block">
              <img src={documentsImg} alt="documentsImg" />
            </div>
            <p className="text-block">
              Свидетельство о регистрации Российского союза писателей как общественной организации в Министерстве юстиции Российской федерации
            </p>
          </div>

          <div className="documents-block">
            <div className="img-block">
              <img src={documentsImg} alt="documentsImg" />
            </div>
            <p className="text-block">
              Свидетельство о регистрации Российского союза писателей как общественной организации в Министерстве юстиции Российской федерации
            </p>
          </div>
        </div>
        <p className="documents-description">Регламентирующие документы</p>
        <div className="regulatory-documents_lists">
          <DocumentsList />
          <DocumentsList />
          <DocumentsList />
        </div>
      </div>
    </section>
  );
};

export default Documents;