import React from 'react'
import BoxResults from './BoxResults';

const HarrisBenedictResult = ({ sex, weight, height, age }: { sex: any, weight: any, height: any, age: any }) => {
    const geb = () => {
        return sex === 'masc' ? 66.5 + (13.75 * weight) + (5 * height * 100) - (6.78 * age) :
            sex === 'fem' ? 655.1 + (9.56 * weight) + (1.85 * height * 100) - (4.68 * age) : 0.0
    }
    return (
        <BoxResults title={'Harris-Benedict'} geb={geb()} isHarris={true} />
    )
}
export default HarrisBenedictResult