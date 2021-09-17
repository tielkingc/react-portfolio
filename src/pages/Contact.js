import React from "react";
import emailjs, { init } from 'emailjs-com';
init('user_ja2wZURnqKxM1uQwQNyxz')

function Contact() {
function sendEmail(e) {
    e.preventDefault();

    const serviceID = 'service_e9o1aii';
    const templateID = 'template_zvz7u1g';

    emailjs.sendForm(serviceID, templateID, e.target)
    .then((result) => {
        console.log(result.text);
        window.location.reload()
    }, (error) => {
        console.log(error.text);
    });
    
}

    return(
        <div className ="container-fluid pb-5">
            <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Need to contact me?</h1>
                    <p className='fs-5'> Please use this form for your questions and concerns</p>
                </div>
            </div>
            <div className='d-flex column-8 container justify-content-center '>
                <form className='contact-form ' onSubmit={sendEmail} id="contact">
                    <div className="row my-2">
                        <label for="from_name">Your Name</label>
                        <input type="text" name="from_name" id="from_name" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="row my-2">
                        <label for="message">What Can I Help With?</label>
                        <textarea rows='3' name="message" id="message" className="form-control input-md border border-primary shadow"/>
                    </div>
                    
                    <div className="row my-2">
                        <label for="from_email">Email Address</label>
                        <input type="text" name="from_email" id="from_email" placeholder="email@address.com" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="flex-row space-between my-2 col-6 mx-auto">
                    <button className="btn btn-danger shadow" type="submit">Connect with me!</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;