import React from 'react'
import BoxResults from './BoxResults';

const MiffilSTJeorResult = ({ sex, weight, height, age }: { sex: any, weight: any, height: any, age: any }) => {
    const geb = () => {
        return sex === 'masc' ? (10 * weight) + (6.25 * height * 100) - (5 * age) + 5 :
            sex === 'fem' ? (10 * weight) + (6.25 * height * 100) - (5 * age) - 161 : 0.0
    }
    return (
        <BoxResults title={'Miffil ST-Jeor'} geb={geb()} isHarris={false} />
    )
}
export default MiffilSTJeorResult