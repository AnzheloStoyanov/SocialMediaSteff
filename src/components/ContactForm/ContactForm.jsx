import { useState } from "react";
import "./ContactForm.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import { useParams } from "react-router-dom";

const ContactForm = ({ className }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    indate: '',
    outdate: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmissionStatus('success');
  };

  return (
<div className={`form ${className}`} >   
<button onClick={()=>{alert(id)}}>Prss</button>

  <h3>Пишете ни</h3>
      <form method="post" class="contact__form">
        <div className="row">
          <div class="col-12">
          {submissionStatus === 'success' && (
              <div className="alert alert-success contact__msg" role="alert">
                Съобщението Ви беше изпратено успешно!
              </div>
            )}
          </div>
        </div>
        <div class="row">
          <div class=" form-group">
          <input
              name="name"
              type="text"
              placeholder="Вашето име *"
              required=""
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div class=" form-group">
          <input
              name="email"
              type="email"
              placeholder="Email *"
              required=""
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div class=" form-group">
          <input
              name="phone"
              type="text"
              placeholder="Телефон *"
              required=""
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div class=" form-group">
          <input
              name="subject"
              type="text"
              placeholder="Относно *"
              required=""
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          {/* <Calendar></Calendar> */}
          <div class="from-bottom-section">
            <div class="input1_wrapper">
              <label>Пристигане</label>
              <div class="input1_inner">
                <input
                  type="text"
                  name="indate"
                  class="form-control input datepicker hasDatepicker"
                  placeholder="Дата на пристигане"
                  id="dp1705831260408"
                />
              </div>
            </div>
          </div>
          <div class="from-bottom-section">
            <div class="input1_wrapper">
              <label>Заминаване</label>
              <div class="input1_inner">
                <input
                  type="text"
                  name="outdate"
                  class="form-control input datepicker hasDatepicker"
                  placeholder="Дата на заминаване"
                  id="dp1705831260409"
                />
              </div>
            </div>
          </div>

          <div class="from-bottom-section form-group">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Уточнения + брой възрастни/деца *"
              required=""
            ></textarea>
          </div>
          <div class="from-bottom-section">
            <DynamicButton onClick={handleSubmit} text='Изпратете'></DynamicButton>
            {/* <button class="butn-dark"  type="submit">
            Изпратете
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
