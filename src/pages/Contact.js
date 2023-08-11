import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import FotografiaDerecha from "../assets/fotografiaderecha.jpg";
import "../styles/Contact.css";

function Contact() {
  const initialStateValue = {
    name: "",
    email: "",
    message: "",
  };

  const [values, setValues] = useState(initialStateValue);

  const firebaseConfig = {
    apiKey: "AIzaSyDrUCUpxNOk1GEfpuv1pVyADY1jDkrYHIo",
    authDomain: "proyecto-4-udd.firebaseapp.com",
    projectId: "proyecto-4-udd",
    storageBucket: "proyecto-4-udd.appspot.com",
    messagingSenderId: "450735800776",
    appId: "1:450735800776:web:3e35dee525afae674080fd",
  };

  const app = initializeApp(firebaseConfig);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase(app);

    const dataRef = ref(db, "contactEntries");

    push(dataRef, values);

    setValues(initialStateValue);

    console.log("Data sent to Firebase:", values);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FotografiaDerecha})` }}
      ></div>
      <div className="rightSide">
        <h1>Contacto</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo</label>
          <input
            name="name"
            placeholder="Ingresa tu nombre y apellido..."
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            placeholder="Ingresa tu e-mail..."
            type="email"
            onChange={handleInputChange}
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Reserva tu mesa..."
            name="message"
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Reservar mesa</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
