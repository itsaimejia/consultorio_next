import { fasValues } from './faValues';
export const harrisBenedict = ({ sex, weight, height, age }: { sex: any, weight: any, height: any, age: any }) => {
    return sex === 'masc' ? 66.5 + (13.75 * weight) + (5 * height * 100) - (6.78 * age) :
        sex === 'fem' ? 655.1 + (9.56 * weight) + (1.85 * height * 100) - (4.68 * age) : 0.0
}

export const mifflin = ({ sex, weight, height, age }: { sex: any, weight: any, height: any, age: any }) => {
    return sex === 'masc' ? (10 * weight) + (6.25 * height * 100) - (5 * age) + 5 :
        sex === 'fem' ? (10 * weight) + (6.25 * height * 100) - (5 * age) - 161 : 0.0
}

export const oms = ({ sex, weight, height }: { sex: any, weight: any, height: any }) => {
    return sex === 'masc' ? (11.3 * weight) + (16 * height) + 901 :
        sex === 'fem' ? (8.7 * weight) - (25 * height) + 865 : 0.0
}

export const owen = ({ sex, weight }: { sex: any, weight: any }) => {
    return sex === 'masc' ? 879 + (10.2 * weight) :
        sex === 'fem' ? 795 + (7.18 * weight) : 0.0
}

export const valencia = ({ sex, weight, age }: { sex: any, weight: any, age: any }) => {
    return sex === 'masc' ? ((age <= 29) ? (13.37 * weight) + 747 : (age <= 59) ? (13.08 * weight) + 693 : (14.21 * weight) + 429) :
        sex === 'fem' ? ((age <= 29) ? (11.02 * weight) + 679 : (age <= 59) ? (10.92 * weight) + 677 : (10.98 * weight) + 520) : 0.0
}

export const getFormula = ({ factor, formula, sex, weight, height, age }: { factor: any, formula: any, sex: any, weight: any, height: any, age: any }) => {
    let f = factor === 'SEDENTARIO' ? fasValues.SEDENTARIO : factor === 'LIGERO' ? fasValues.LIGERO :
        factor === 'MODERADO' ? fasValues.MODERADO : factor === 'ACTIVO' ? fasValues.ACTIVO :
            factor === 'VIGOROSO' ? fasValues.VIGOROSO : 0
    switch (formula) {
        case 'harris-benedict':
            let geb = harrisBenedict({ sex, weight, height, age })
            return (geb * f) + (geb * 0.10)
        case 'mifflin':
            return mifflin({ sex, weight, height, age }) * f
        case 'owen':
            return owen({ sex, weight }) * f
        case 'oms':
            return oms({ sex, weight, height }) * f
        case 'valencia':
            return valencia({ sex, weight, age }) * f
        default:
            return 0
    }

}