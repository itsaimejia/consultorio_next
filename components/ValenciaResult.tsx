import React from 'react'
import TableResults from './TableResults';

const ValenciaResult = ({ sex, weight, age }: { sex: any, weight: any, age: any }) => {
    const geb = () => {
        return sex === 'masc' ? ((age <= 29) ? (13.37 * weight) + 747 : (age <= 59) ? (13.08 * weight) + 693 : (14.21 * weight) + 429) :
            sex === 'fem' ? ((age <= 29) ? (11.02 * weight) + 679 : (age <= 59) ? (10.92 * weight) + 677 : (10.98 * weight) + 520) : 0.0
    }
    return (
        <TableResults title={'Valencia'} geb={geb()} isHarris={false} />
    )
}
export default ValenciaResult