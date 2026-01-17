import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";

export default function Contact(){

        const navigate = useNavigate();
       const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);

            formData.append("access_key", "1d95796d-63ff-4a2c-81aa-c326b353f803");

            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Success",
                    text: "Message send successfully",
                    icon: "success"
                }).then(()=>{
                    event.target.reset();
                })
            } else {
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                    });
            setResult(data.message);
            }
        };


    return(
        <div className="form-container" onClick={() => navigate(-1)}>
            <form id="contact" className="form-contact" onClick={(e) => e.stopPropagation()} onSubmit={onSubmit}>
                <h1 className="contact-header">Contact us</h1>
                <div className="form">
                    <label className="text-label">Full Name</label>
                    <input type="text" className="text-input" placeholder=" Full Name" name="name" required></input>
                    <label className="text-label">Email</label>
                    <input type="email" className="text-input" placeholder="Email" name="email" required></input>
                    <label className="text-label">Message</label>
                    <textarea type="message" className="text-input" rows={3} placeholder="Message" name="message" required></textarea>
                    <motion.button whileHover={{scale:1.1}} className="form-button">Send Message</motion.button>
                </div>      
            </form>
            <div className="img-contact">
                <img src="/img-cont.png" alt="unavailable" className="img-cont"></img>
            </div>
       </div>
    )
}