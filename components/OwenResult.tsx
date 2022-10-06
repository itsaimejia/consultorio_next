import React from 'react'
import TableResults from './TableResults';

const OwenResult = ({ sex, weight }: { sex: String, weight: any }) => {
    const geb = () => {
        return sex === 'masc' ? 879 + (10.2 * weight) :
            sex === 'fem' ? 795 + (7.18 * weight) : 0.0
    }
    return (
        <TableResults title={'Owen'} geb={geb()} isHarris={false} />
    )
}
export default OwenResult