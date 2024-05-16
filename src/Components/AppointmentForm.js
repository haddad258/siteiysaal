import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientMessage, setpatientMessage] = useState("");
  const [patientEmail, setpatientEmail] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Name must be at least 8 characters";
    }

    if (!patientEmail.trim()) {
      errors.patientEmail = "Email is required";
    } 
    // else if (patientEmail.trim().length !== 10) {
    //   errors.patientEmail = "Patient phone number must be of 10 digits";
    // }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    } 
    if (!patientMessage.trim()) {
      errors.patientMessage = " Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setpatientEmail("");
    setpatientMessage("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Iysaal
           {/* <span className="legal-siteSign">+</span> */}
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Contactez nous</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Votre nom:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Votre email:
            <input
              type="email"
              value={patientEmail}
              onChange={(e) => setpatientEmail(e.target.value)}
              required
            />
            {formErrors.patientEmail && <p className="error-message">{formErrors.patientEmail}</p>}
          </label>

          <br />
          <label>
            Votre message:
            <textarea
              value={patientMessage}
              onChange={(e) => patientMessage(e.target.value)}
              placeholder="Saisissez votre message ici..."
              rows={5} // Nombre de lignes de la zone de texte
              cols={50} // Nombre de colonnes de la zone de texte
            />
            {formErrors.patientMessage && <p className="error-message">{formErrors.patientMessage}</p>}
          </label>

          <br />
          {/* <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label> */}

          {/* <br /> */}
          {/* <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br /> */}
          {/* <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br /> */}
          <button type="submit" className="text-appointment-btn">
            Contacter
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2022-2024 Iysaal. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
