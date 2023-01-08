import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}

ReactDOM.render(
    <ReCAPTCHA
        sitekey="6LdvuN8jAAAAABSTgcniKXjNKTzrsdLvxeunQ-5K"
        onChange={onChange}
    />,
    document.body
);