import React from 'react'
import { useForm } from "react-hook-form";

export default function EmailForm() {
    const {
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h1 className='p-5'>This is EmailForm Section</h1>
            <form onSubmit={onSubmit}>
                <input
                    required
                    id="email-sub"
                    className="form-control"
                    placeholder="Enter Email Subject"
                    {...register("email-sub", { required: true })}
                />
                <br />
                {errors.email && (
                    <span className="text-error">This field is required</span>
                )}
                <textarea
                    required
                    className="form-control"
                    id='email-body'
                    type="text-area"
                    placeholder="write email........."
                    {...register("email-body", { required: true })}
                />
                <br />
                {errors.message && (
                    <span className="text-error">This field is required</span>
                )}{" "}
                <br />
                <input className="btn btn-success" value="Send your email" type="submit" />
                {/* <p style={{ color: email ? "green" : "red", fontWeight: "bold" }}>
                {email && "Successfully send your valuable message.."}
            </p>
            <p style={{ color: email === false && "red", fontWeight: "bold" }}>
                {email === false && "Please Try again.."}
            </p> */}
            </form>
        </div>

    )
}
