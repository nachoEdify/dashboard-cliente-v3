import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Tag from '../Tag/Tag'

/* USE EXAMPLE

const [selected, setSelected] = useState(0)

const tabs = [
    {
        id: 0,
        title: "Información",
        tag: "",
        component: <Information />
    },
] 

*/

const Tabs = ({ tabs, selected, setSelected, className }) => {
    return (
        <div className="space-y-8">
            <div className={`flex items-end whitespace-nowrap justify-start w-full overflow-auto border-b scroll-transparent space-x-8 text-sm ${className}`}>
                {tabs.map((tab)=>{
                    return(
                        <div key={tab.id} onClick={()=>setSelected(tab.id)} className={`pb-[6px] uppercase relative cursor-pointer inline-block items-center font-semibold duration-100 transition-all ${tab?.tag && 'pr-4'} ${tab.id === selected ? 'text-primary-orange border-b-2 border-primary-orange hover:text-black' : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600'}  ${tab?.disabled === true && 'opacity-30'}`}>
                            {tab.title}
                            {tab.tag &&
                                <div className={`absolute my-auto ${String(tab.tag).length > 2 ? '-right-6' : '-right-4'}`}>
                                    <Tag name={tab.tag} size="sm" color={tab.id === selected ? '#0086C9' : '#344054'} bullet={false} className={'ml-2'} />
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            {tabs.map((tab)=>{
                if(tab.id === selected){
                    return(
                        <React.Fragment key={tab.id}>
                            <AnimatePresence>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {tab.component}
                                </motion.div>
                            </AnimatePresence>
                        </React.Fragment>
                    )
                }
            })}
        </div>
    );
}

export default Tabs;