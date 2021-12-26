import React from 'react'

export function Heading1({children, className}) {
    return (
        <h1 className={'text-gray-800 font-semibold text-[64px] leading-snug font-poppins ' +  className}>
            {children}
        </h1>
    )
}

export function Heading2({children, className}) {
    return (
        <h1 className={'text-gray-800 font-semibold text-[40px] leading-[56px] font-poppins ' +  className}>
            {children}
        </h1>
    )
}


export function Heading3({children, className}) {
    return (
        <h1 className={'text-gray-800 font-semibold text-[24px] leading-[34px] font-poppins ' +  className}>
            {children}
        </h1>
    )
}

export function Paragraph({children, className}) {
    return (
        <p className={'text-lg text-gray-600 font-normal ' +  className}>
            {children}
        </p>
    )
}

export function SmallParagraph({children, className}) {
    return (
        <p className={'text-sm text-gray-700 font-normal ' +  className}>
            {children}
        </p>
    )
}
