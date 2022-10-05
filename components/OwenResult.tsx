import React from 'react'
import BoxResults from './BoxResults';

const OwenResult = ({ sex, weight }: { sex: any, weight: any }) => {
    const geb = () => {
        return sex === 'masc' ? 879 + (10.2 * weight) :
            sex === 'fem' ? 795 + (7.18 * weight) : 0.0
    }
    return (
        <BoxResults title={'Owen'} geb={geb()} isHarris={false} />
    )
}
export default OwenResult