import React from "react";
import {Link} from '@/i18n/routing';

interface MinicartProps {
    title: string;
    icon?: string;
    productsCount?: string;
}

export default async function Minicart({title, icon, productsCount} : MinicartProps){
    const minicartTitle = await title;
    const minicartProductsCount = await productsCount;
    return (
        <div className={"minicart"}>
            <a href="#" title={minicartTitle}>Minicart <span>{minicartProductsCount}</span></a>
        </div>
    );
};
