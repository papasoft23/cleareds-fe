import React from "react";
import {Link} from '@/i18n/routing';
import SubNavigationItem from './SubNavigationItem';

interface MenuItem {
    title: string;
    link?: string;
    label?: string;
    locale?: string;
    children?: MenuItem[];
}

interface NavigationProps {
    menuData: {} | MenuItem[];
    type: string;
    locale?: string;
}

export default async function Navigation({menuData, type, locale} : NavigationProps){
    const menuType = type;
    const menuDataResult = await menuData;
    const menuItems: [MenuItem] = locale && Array.isArray(menuDataResult) ? menuDataResult[0][locale] : menuDataResult;
    return (
        <nav className={menuType + (menuType !== 'megamenu' ? ' w-full' : '')}>
            <ul className="flex justify-between -mx-2">{
                menuItems.map((item, index) => (
                    <li key={index} className={(menuType !== 'megamenu' ? 'p-2' : 'pl-16')}>
                        {item.link ? (
                            <Link href={item.link} className={(menuType !== 'megamenu' ? 'text-xl font-bold mb-2 block' : '')}>{item.title}<span>{item.label}</span></Link>
                        ) : (
                            <span className={(menuType !== 'megamenu' ? 'text-xl font-bold mb-2 block' : '')}>
                                {item.title}
                                {item.label && (<span>{item.label}</span>)}
                            </span>
                        )}
                        {item.children && item.children.length > 0 && (
                            <SubNavigationItem type={menuType} children={item.children}/>
                        )}
                    </li>
                ))
            }</ul>
        </nav>
    );
};
