import {FormEvent, HTMLProps, useRef} from "react";

interface ISignup {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {
    const signup = async (data: Partial<ISignup>) => {
        const response = await fetch('http://localhost:4219/auth/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
        console.log(await response.json())
    }

    const formRef = useRef(null)
    const handleSubmit = (e: FormEvent) => {
        console.log(e)
        if (!formRef || !formRef.current) throw new Error("form is not ready")
        const formData = new FormData(formRef.current)
        const formObj: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((value, key) => {
            formObj[key] = value
        })
        console.log(formObj)
        signup(formObj)
    }

    return (
        <div className={'text-white p-4  md:p-10'}>
            <header className={'text-center tracking-normal font-extrabold underline text-2xl my-5'}>Signup</header>

            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
            }} ref={formRef}>
                <section
                    className='border-2 md:w-fit mx-auto h-fit bg-gray-400 rounded-md md:p-8 p-4 grid md:grid-cols-2  gap-5'>
                    <label className='grid' htmlFor="userName">
                        <span className={''}>Username:</span>
                        <Input name={'userName'} type="text"/>
                    </label>
                    <label className='grid' htmlFor="firstName">
                        <span>First Name:</span>
                        <Input name={'firstName'} type="text"/>
                    </label>
                    <label className='grid' htmlFor="lastName">
                        <span>Last Name:</span>
                        <Input name={'lastName'} type="text"/>
                    </label>
                    <label className='grid' htmlFor="email">
                        <span>Email:</span>
                        <Input name={'email'} type="text"/>
                    </label>
                    <label className='grid' htmlFor="password">
                        <span>Password:</span>
                        <Input name={'password'} type="text"/>
                    </label>
                    <label className='grid' htmlFor="confirmPassword">
                        <span>Retype password:</span>
                        <Input name={'confirmPassword'} type="text"/>
                    </label>
                    <button type={'submit'} className={'rounded-md border-2 bg-emerald-200 text-black'}>Submit</button>
                </section>
            </form>
        </div>
    )
}
export default Signup

type CustomInputProps = Omit<HTMLProps<HTMLInputElement>, 'className'> & {
    className?: string;
}

export const Input = (props: CustomInputProps) => {
    return <input  {...props} className={`rounded-md border-2  bg-[#333] px-2 ${props.className}`}/>
}