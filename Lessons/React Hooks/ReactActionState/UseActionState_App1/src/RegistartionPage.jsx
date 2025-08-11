import { useActionState } from "react";

const Registartion = () =>{
    const [state, formAction, isPending] = useActionState(register,{success: null, message: ""});
    return(
        <div>
            <h3>Registartion</h3>
            <form action={formAction}>
                <input type="text" name="name" id="name" placeholder="Enter name" />
                <br />
                <br />
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <br />
                <br />
                <input type="text" name="contact" id="contact" placeholder="Enter contact number" />
                <br />
                <br />
                <input type="password" name="password" id="password" placeholder="Enter password" />
                <br />
                <br />
                <textarea name="address" id="address" placeholder="Enter address"></textarea>
                <br />
                <br />
                <button disabled={isPending} >{isPending ? "Registartion processing" : "Register"}</button>
            </form>
            {
                state.message && (
                    <p style={{color: state.message ? "green" : "red"}}>{state.message}</p>
                )
            }
        </div>
    )
}

function register(prevState, formData){
    const name = formData.get('name');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const password = formData.get('password');
    const address = formData.get('address');
    
    if(!name || !email || !contact || !password || !address){
        return{
            success: false,
            message: "Enter all fileds"
        };
    }

    return{
        success: true, message: "Registartion Successful"
    };
}

export default Registartion;