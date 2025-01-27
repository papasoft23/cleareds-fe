import React from "react";
import {Link} from '@/i18n/routing';

interface MyAccountProps {
    title: string;
    icon?: string;
    isLoggedIn: Boolean;
}

export default async function MyAccount({title, icon, isLoggedIn} : MyAccountProps){
    const accountLinkTitle = await title;
    const accountIcon = await icon;
    const accountLoggedIn = await isLoggedIn;
    return (
        <div className={"my-account"}>
            <a href="#" title={accountLinkTitle}>
                {accountLoggedIn ? 'Hello, John' : 'Sign In'}</a>
        </div>
    );
};
