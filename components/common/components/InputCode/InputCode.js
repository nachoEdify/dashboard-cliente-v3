import React, { useState, useEffect } from 'react'
import { Input } from '@nextui-org/react'

const InputCode = ({ setValue, size = 6 }) => {

    const [inputValues, setInputValues] = useState({})

    const handleFocusOn = (id) => {
        document.getElementById(id).focus()
    }

    const handleSetCode = (pos, val) =>{
        if(val?.length > 1){
            let valSplit = val.split('')
            let newInputValue = {}
            let array = [...Array(size)]
            array.forEach((v, i) => {
                newInputValue[i] = valSplit[i] || ''
            })
            setInputValues(newInputValue)
            handleFocusOn('pos_' + String(Number(size) - 1))
        }else{
            setInputValues({
                ...inputValues,
                [pos]: val
            })
            try{
                if(val?.length > 0){
                    if(pos !== String(size-1)){
                        handleFocusOn('pos_' + String(Number(pos) + 1))
                    }
                }else{
                    if(pos !== '0'){
                        handleFocusOn('pos_' + String(Number(pos) - 1))
                    }
                }
            } catch(e){}
        }
    }

    useEffect(() => {
        let newObj = {}
        for (let i = 0; i < size; i++) {
            newObj[i] = ''
        }
        setInputValues(newObj)
    }, [])
    

    return (
        <div className="w-full space-x-3 flex items-center">
            {Object.entries(inputValues).map(([pos, val]) => {
                return (
                    <div key={pos} className="w-[45px]">
                        <Input
                            id={`pos_${pos}`}
                            autoFocus={pos === '0'}
                            value={val}
                            bordered
                            aria-label={`Pos ${pos}`}
                            maxLength={pos === String(0) ? String(size) : "1"}
                            pattern="\d*"
                            size="xl"
                            onChange={(e) => handleSetCode(pos, e.target.value)}
                            placeholder="0"
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default InputCode;