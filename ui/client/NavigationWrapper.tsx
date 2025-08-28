'use client'
import {useState} from 'react';
import Navigation from '../components/general/navigation/Navigation'

type NavigationWrapperProps = {
    menuData: {};
    locale?: string;
}

export default function NavigationWrapper({menuData, locale}: NavigationWrapperProps) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => {
                setOpen(o => !o)
            }}>
                ☰
            </button>
            <div className={!open ? 'hidden' : ''}>
                <Navigation type={"megamenu"} menuData={menuData} locale={locale}/>
            </div>
        </>
    )
}
