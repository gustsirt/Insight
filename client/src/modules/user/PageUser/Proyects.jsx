import React, { useState } from 'react'
import SectionWForm from '../../layout/frame/Section.Form';
import { z } from 'zod';
import { BiCalendar, BiLogoGmail, BiLogoLinkedin, BiPhone } from 'react-icons/bi';

const Proyects = () => {
  const [data, setData] = useState({
    email: 'john.doe@example.com',        // Email del usuario
    phone: '',                            // Número de teléfono opcional (vacío)
    //birthday: undefined,                // Fecha de nacimiento opcional (vacío)
    //linkedinId: 'john-doe-linkedin',    // ID de LinkedIn
    created: '2023-09-19',                // Fecha de creación (no editable)
    connection: '2023-09-19',             // Estado de conexión (no editable)
  });

  // Definición de los campos con validación
  const fields = [
    { name: "email", label: "Email", icon:BiLogoGmail, type: "email", validation: z.string().email("Debe ser un email válido"), private: true },
    { name: "phone", label: "Teléfono", icon: BiPhone, type: "tel", validation: z.string().min(10, "El teléfono debe tener al menos 10 dígitos").optional() },
    { name: "birthday", label: "Fecha de Nacimiento", icon: BiCalendar, type: "date", validation: z.date().optional},
    { name: "linkedinId", label: "LinkedIn ID", icon: BiLogoLinkedin,  type: "text", noEditable: true },
    { name: "created", label: "Fecha de Creación", icon: BiCalendar,  type: "date", noEditable: true },
    { name: "connection", label: "Estado de Conexión", icon: BiCalendar,  type: "date", noEditable: true }
  ];

  return (
    <>
      <SectionWForm
        title="HACIENDO SECTION WITH FORM"
        data={data}
        setData={setData}
        isEditable={true}
        isPublic={true}
        fields={fields}
        >
      </SectionWForm>
    </>
  )
}

export default Proyects