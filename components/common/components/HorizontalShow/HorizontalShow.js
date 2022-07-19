import React from 'react'
import { BiPlus, BiRightArrowAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';
import EmptyComponent from '../EmptyComponent/EmptyComponent';

const HorizontalShow = ({ title, handler, children, isEmpty, emptyTitle, emptyMessage, emptyIcon, isTabletOrMobile, isPlusButton, desktopSize = 4 }) => {

    const SIZES_GRID = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8'
    }

    return (
        <div className="mt-8">
            <div onClick={handler} className="flex justify-between cursor-pointer items-center text-lg text-gray-400 hover:text-gray-500 duration-200 transition-all pr-6 pl-6 lg:pl-20 lg:pr-0">
                <span>{title}</span>
                <BiRightArrowAlt size="28" />
            </div>
            <div className={`pb-6 pt-6 pl-6 lg:pl-20 pr-6 lg:pr-0 relative ${isTabletOrMobile ? 'snap-mandatory snap-x overflow-scroll scroll-transparent flex space-x-4' : `grid ${SIZES_GRID?.[desktopSize]} gap-4`} `}>
                {children}
                {isEmpty &&
                    <div className="w-full border rounded-lg py-6">
                        <EmptyComponent title={emptyTitle} description={emptyMessage} icon={emptyIcon} />
                    </div>
                }
                {isPlusButton &&
                    <div onClick={handler} className="absolute align-middle top-0 right-0 flex h-full items-center w-0">
                        <div className="rounded-full bg-white p-4 active:scale-95 -translate-x-8 z-max text-gray-400 shadow-sm cursor-pointer hover:bg-gray-50 duration-300 transition-all" >
                            <BiPlus size="28" />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

const HorizontalDiv = ({ children, isTabletOrMobile, delay, id, ...props }) =>{
    return (
        <motion.div 
            className={`${isTabletOrMobile ? 'snap-center snap-always lg:snap-normal flex-shrink-0' : 'col-span-1'}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}   
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

HorizontalShow.Div = HorizontalDiv;

export default HorizontalShow;