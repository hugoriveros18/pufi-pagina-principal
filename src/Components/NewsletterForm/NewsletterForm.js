import { ValidationError, useForm } from "@formspree/react";
import rightArrow from '../../Assets/full-right-arrow.svg';
import './NewsletterForm.css'


function NewsletterForm(){
    const [state,handleSubmit] = useForm('xlevnwyd');
    if(state.succeeded){
        return<div className="mensaje-newsletter">¡Gracias por suscribirse!</div>
    }
    return(
        <form className="newsletter-form-container" onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" placeholder="Ingresa tu email"/>
            <ValidationError field="email" prefix="Email" errors={state.errors}/>
            <button type="submit" className="newsletter-button" disabled={state.submitting}>
                <img src={rightArrow} alt="Right arrow"/>
            </button>
        </form>
    )
}

export { NewsletterForm };