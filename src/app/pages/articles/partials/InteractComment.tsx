import React from 'react';
import { Button, Input } from '../../../shared/components/partials';

const InteractComment = () => {
  return (
    <form className="section-comment">
      <textarea className="txtArea form-control"></textarea>
      <Button classBtn="btn btn-primary btn-comment" text="Comment"/>
    </form> 
   );
}

export default InteractComment;