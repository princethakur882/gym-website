import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
 import * as Yup from 'yup';
import { toast } from "react-toastify";
const Join = () => {
const schema=Yup.object().shape({
  user_name:Yup.string().min(4,"minimum 4 characters required").max(20,"cant exceed more than 20 characters").required("name is required"),
  user_email:Yup.string().email().required(),
  message:Yup.string().required()
})

  const { register, handleSubmit, formState: { errors }, reset }=useForm({resolver:yupResolver(schema),mode:"onChange"})

  const form = useRef();

  const submithandler = (data) => {
   
    emailjs
      .sendForm(
        "service_26ghf4k",
        "template_1ibgh3b",
        form.current,
        "vFBG2fAF6fbNLE7tr"
      )
      .then(
        (result) => {
          toast.success("Done")
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ).finally((
        
        reset()
      ))
  };

  // const submithandler=(data)=>{
  //   console.log(data);
  //   reset();
  // }
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={handleSubmit(submithandler)}>
          <label>Name</label>
          <br />
          <input type="text" {...register("user_name")}  placeholder="Enter your Name"  /> <br/>
          <span style={{color:"red"}}>{errors?.user_name?.message}</span>
          <br />
          <label>Email</label>
          <br />
          <input
          {...register("user_email")}
            type="email"
          
            placeholder="Enter your email"
          /><br/>
          <span style={{color:"red"}}>{errors?.user_email?.message}</span>
          <br />
          <label>Message</label>
          <br />
          <textarea {...register("message")}  placeholder="Your Message" /><br/>
           <span style={{color:"red"}}>{errors?.message?.message}</span>
          <br />
          <button className="btn btn-j" type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
