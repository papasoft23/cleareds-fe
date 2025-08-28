// Defaults
import Image from 'next/image';
import '@/app/globals.css';

// Localisation
import {NextIntlClientProvider, AbstractIntlMessages} from 'next-intl';
import {getMessages} from "next-intl/server";

// Context providers
import { CartProvider } from '@/context/CartContext';

// [Dummy] Navigation Data
import MenuDataSource from "@/dummydata/navigation/mega-menu.json";
import FooterMenuDataSource from "@/dummydata/navigation/footer-menu.json";

// UI
import Navigation from "@/ui/components/general/navigation/Navigation";
import Minicart from "@/ui/components/general/cart/Minicart";
import Account from "@/ui/components/general/account/Account";
import LogoImage from "@/public/logo.svg";
import NavigationWrapper from "@/ui/client/NavigationWrapper";

export type LayoutParams = {
    children: React.ReactNode,
    params: {
        locale: string
    }
};

export default async function LocaleLayout(
    {
        children,
        params,
    }: LayoutParams) {
    const {locale} = await params;
    const messages: AbstractIntlMessages = await getMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={ locale } messages={messages}>
            <CartProvider>
                <header>
                    <div
                        className="container flex justify-between items-center px-6 py-4 md:px-12 lg:px-8 xl:px-24 2xl:max-w-screen-2xl mx-auto">
                        <div className="logo max-w-[150px] pr-4">
                            <Image src={LogoImage} alt={""}/>
                        </div>
                        <NavigationWrapper menuData={MenuDataSource} locale={locale}/>
                        <div className="header-icons flex justify-between items-center pl-4 gap-16">
                            <Account title={"My Account"} isLoggedIn={true}/>
                            <Minicart title={"Minicart"} productsCount={"25"}/>
                        </div>
                    </div>
                </header>
                {children}
                <footer>
                    <div
                        className="container flex justify-between flex-wrap items-center px-6 py-4 md:px-12 lg:px-8 xl:px-24 2xl:max-w-screen-2xl mx-auto">
                        <Navigation type={"columns"} menuData={FooterMenuDataSource}/>
                        <p className="min-w-full flex-1 flex py-4 my-4 text-s">&copy; Cleareds - clean e-commerce
                            deciding solutions</p>
                    </div>
                </footer>
            </CartProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
