import { useState } from "react";
import { InputButton } from "./input-button";
import { InputConsentment } from "./input-consentment";
import { InputField } from "./input-field"
import { InputSelect } from "./input-select";
import { InputTextarea } from "./input-textarea";



export function Form({ children }, handleSubmit) {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}