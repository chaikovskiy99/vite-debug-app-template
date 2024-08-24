import {Input} from "./signup.tsx";
import {FormEvent, useRef} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()
    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (formRef.current === null) throw new Error("form is not ready")
        const formData = new FormData(formRef.current)
        const obj: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((v, k) => {
            obj[k] = v
        })

        Object.keys(obj).forEach((k) => {
            if((obj[k] as string).length <= 2){
                alert("fields must contain more characters")
                throw new Error("should contain more characters")
            }
        })
        console.log(obj)
        const response = await fetch('http://localhost:4219/auth/login', {
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'post',
            body: JSON.stringify(obj)
        }, )
        if(response.status === 200){
            navigate('/')
        }
    }

    return <div className={'text-white'}>
        <header className={'font-extrabold text-2xl text-center p-4  md:p-10'}>Login</header>
        <div
            className={'divide-amber-600 border-2 rounded-md py-8 md:w-fit md:px-6 px-2 mx-auto flex flex-col text-center gap-5'}>
            <form ref={formRef} onSubmit={handleSubmit} className={'flex flex-col'}>
                <label className='grid md:grid-cols-[1fr_3fr] my-6' htmlFor="email">
                    <span className={'text-left'}>Email:</span>
                    <Input name={'email'} className={'md:max-w-[300px]'}/>
                </label>
                <label className={'grid md:grid-cols-[1fr_3fr]'} htmlFor="password">
                    Password:
                    <Input className={'md:max-w-[300px]'} name={'password'}/>
                </label>
                <div className={'text-center my-6'}>
                    <button className='rounded-md border-2 md:w-1/4 bg-emerald-200 text-black'>Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default Login