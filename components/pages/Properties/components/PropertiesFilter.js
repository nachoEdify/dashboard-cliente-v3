import React from 'react'
import Select, { components } from 'react-select'
import { Input } from '@nextui-org/react';
import { BiSearch } from 'react-icons/bi';
import { propertyStateEnum } from '../../../common/enums/propertyStateEnum';

/*

    COSAS A TENER EN CUENTA
    -> EmptyState Dinámico
    -> 3 números busca por máximo metros cuadrados
    -> +3 dígitos busca por precio
    -> letras busca por address

*/

const PropertiesFilter = () => {

    const ControlPropertyState = ({ children, ...props }) => {

        let itemSelected = props?.getValue()?.[0]

        let style = {
            backgroundColor: itemSelected?.color || '#98A2B3'
        }

        return (
          <components.Control {...props}>
            <div style={style} className="w-2 h-2 rounded-full bg-green-400 ml-3" />
            {children}
          </components.Control>
        );

    }


    return (
        <div className="w-full justify-between flex items-center space-x-4 lg:space-x-8">
            <div className="w-1/2">
                <Input 
                    bordered 
                    placeholder="Buscar calle, precio, tamaño..."
                    fullWidth
                    aria-label="Buscar"
                    contentLeft={<BiSearch />}
                />
            </div>
            <div className="w-1/2">
                <Select
                    options={propertyStateEnum}
                    id="state-property-select"
                    instanceId="state-property-select"
                    placeholder="Selecciona estado de la propiedad"
                    components={{Control: ControlPropertyState}}
                    className="z-10"
                />
            </div>
        </div>
    );
}

export default PropertiesFilter;