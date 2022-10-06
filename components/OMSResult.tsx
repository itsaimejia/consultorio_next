import React from 'react'
import TableResults from './TableResults';

const OMSResult = ({ sex, weight, height }: { sex: any, weight: any, height: any, }) => {
    const geb = () => {
        return sex === 'masc' ? (11.3 * weight) + (16 * height) + 901 :
            sex === 'fem' ? (8.7 * weight) - (25 * height) + 865 : 0.0
    }
    return (
        <TableResults title={'OMS'} geb={geb()} isHarris={false} />
    )
}
export default OMSResult