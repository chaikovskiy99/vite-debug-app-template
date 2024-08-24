import './dropdown.module.css'
import {useEffect, useState} from "react";

export default function DropdownDemo() {
    return <div>
        <p>hello</p>
        <Dropdown/>
        <p>hello</p>
    </div>
}

const items = [
    {
        value: 1, label: "first"
    },
    {
        value: 2, label: "second"
    },
    {
        value: 3, label: "third"
    },
    {
        value: 4, label: "fourth"
    },
]

const Dropdown = () => {
    const [textValue, setTextValue] = useState("")
    const [showPopover, setShowPopover] = useState<boolean>(false)

    useEffect(() => {
        const labels = items.map(i => i.label.toLowerCase())
        if (textValue.length > 0) {
            if (labels.includes(textValue.toLowerCase()) || labels.find(l => l.startsWith(textValue.toLowerCase()[0]))) {
                setShowPopover(true)
            } else {
                setShowPopover(false)
            }
        } else {
            setShowPopover(false)
        }
    }, [textValue]);
    return <div className="relative w-[200px] mx-auto z-2000">
        <div className="">
            <input type="" value={textValue} onChange={(e) => setTextValue(e.target.value)}
                   className={'w-[200px] px-3 border-2 rounded-3xl focus:outline-none'} placeholder={'text'}/>
        </div>
        <div
            className={`absolute  top-[100%] w-full left-0 bg-yellow-50 rounded-sm shadow-2xl ${showPopover ? "" : "hidden"}`}>
            <ul className=''>
                {/*{items.map((item, i) => (*/}
                {/*    <li key={item.value} className={`bg-yellow-50 hover:bg-red-300 px-2`}*/}
                {/*    onClick={() => {*/}
                {/*        setTextValue(item.label.toLowerCase())*/}
                {/*        setShowPopover(false)*/}
                {/*    }}>{item.label}</li>*/}
                {/*))}*/}
            </ul>
        </div>
    </div>
}