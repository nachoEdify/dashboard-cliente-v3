import React from 'react'
import { AnimatePresence , motion } from 'framer-motion'
import { BiCheck } from 'react-icons/bi'

/*
    steps: [
        {
            key: 0,
            title: 'Notificaciones',
            component: Notifications,
        },
    ]
*/

const MagicWizard = ({ steps, selected, setSelected, disableTravel }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-2 lg:col-span-1">
                <div>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div onClick={()=>!disableTravel && setSelected(index)} className={`p-2 flex cursor-pointer hover:bg-gray-50 duration-300 transition-all items-center rounded-xl space-x-4 ${selected === index ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}>
                                <div className={`rounded-full border-2 duration-300 transition-all w-10 h-10 text-lg flex items-center justify-center ${selected === index && 'border-green-400'} ${selected > index && 'border-green-400 bg-green-400'}`}>
                                    {selected === index ? step.key : ( selected > index ? (<BiCheck color="white" size="24" />) : index )}
                                </div>
                                <div>
                                    {step.title}
                                </div>
                            </div>
                            {index !== (steps?.length-1) && (
                                <div className={`ml-7 h-8 border border-dashed border-gray-400 w-0 ${selected > index && 'opacity-30'}`}>

                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="col-span-2 lg:col-span-3">
                <AnimatePresence>
                    {steps.map((step, index) => {
                        if(selected === index){
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                >
                                    {step?.component}
                                </motion.div>
                            )
                        }
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MagicWizard;