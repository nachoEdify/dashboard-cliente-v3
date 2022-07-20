import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { BiTaskX } from 'react-icons/bi';
import EmptyComponent from '../EmptyComponent/EmptyComponent';

dayjs.extend(relativeTime)

const LogTimeline = ({ logs }) => {
    return (
        <div>
            <div className="w-full mb-2">
                <span className="text-gray-400 text-base">Actividad</span>
            </div>
            <div className="space-y-8">
                {logs?.map((log, index)=>(
                    <div key={index} className="line-timeline flex items-start py-3 relative">
                        <div className="w-16">
                            <div className="w-14 h-14 rounded-full flex justify-center items-center bg-secondary-orange text-primary-orange text-xl uppercase">
                                {log?.updatedBy?.avatar?.includes('null') || !log?.updatedBy?.avatar ? (<>
                                    <span>{`${log?.updatedBy?.name?.[0]}${log?.updatedBy?.name?.[1]}`}</span>
                                </>) : (<>
                                    <img alt="avatar_image" src={log?.updatedBy?.avatar} className="rounded-full object-cover w-full h-full" />
                                </>)
                                }
                            </div>
                        </div>
                        <div className="w-full ml-2">
                            <div className="space-x-1">
                                <span className="font-semibold text-sm">{`${log?.updatedBy?.name} ${log?.updatedBy?.surname}`}</span>
                                <span className="text-gray-400 text-xs">{dayjs(log?.date).locale('es-ES').fromNow()}</span>
                            </div>
                            <div className="leading-none">
                                <span className="text-gray-500 text-sm leading-none">{log?.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {(logs?.length === 0 || !logs) &&
                <EmptyComponent title="No hay actividad reciente" description="Actualmente no tenemos ninguna actividad reciente, sospechoso... 🤔" icon={<BiTaskX />} />
            }
        </div>
    );
}

export default LogTimeline;