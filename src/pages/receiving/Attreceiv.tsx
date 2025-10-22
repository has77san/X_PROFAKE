import React from "react";
import Receiving from "../../components/ecommerce/Receiving";

function Attreceiv() {
  const handleSave = () => {
    alert("تم حفظ التحويل بنجاح ✅");
  };

  return (
    <div>
      <Receiving
       
        onSave={handleSave}
      />
    </div>
  );
}

export default Attreceiv;
