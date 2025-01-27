import React from "react";
import {Link} from '@/i18n/routing';

interface MenuItem {
    title: string;
    link?: string;
    label?: string;
    children?: MenuItem[]; // Optional for items without submenus
}

interface SubNavigationProps {
    children: MenuItem[];
    type: string;
}

export default async function SubNavigationItem({children, type} : SubNavigationProps){
    const navigationChildren = await children;
    const menuType = await type;
    return (
        <ul className={(menuType === 'megamenu' ? 'hidden ' : 'block ') + menuType + " submenu"}>
            {
                navigationChildren.map((item, index) => (
                    <li key={index} className={"py-1"}>
                        {item.link ? (
                            <Link href={item.link}>{item.title}<span>{item.label}</span></Link>
                        ) : (
                            <span>
                                {item.title}
                                {item.label && (<span>{item.label}</span>)}
                            </span>
                        )}

                        {item.children && item.children.length > 0 && (
                            <ul className="submenu">
                                {
                                    item.children.map((item, index) => (
                                        <li key={index} className="menu-item">
                                            {item.link ? (
                                                <Link href={item.link}>{item.title}<span>{item.label}</span></Link>
                                            ) : (
                                                <span>
                                                    {item.title}
                                                    {item.label && (<span>{item.label}</span>)}
                                                </span>
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                    </li>
                ))
            }
        </ul>
    );
};
