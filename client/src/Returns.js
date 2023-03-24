import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";


export default function Rreturn() {
  const navigate = useNavigate();
  return (

    <div>
      <hr className=""/>
    
    <h3>    Your Crime has been successfully reported
</h3>
      <Button
        variant="outline-dark"
        style={{ width: "100%", marginBottom: "1rem" }}
        onClick={() => navigate(-2)}
      >
        BACK
      </Button>

    </div>
  )
}
