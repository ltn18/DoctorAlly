import React from 'react';
import { useParams } from 'react-router-dom';

const RequestRespond = () => {
  const { id } = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default RequestRespond;