import { Helmet as Head } from "react-helmet";
import { capitalize as capitalise } from "lodash";

export default function Layout({
    children,
    className = "h-full w-full",
    title = "Express App Boilerplate",
}) {
    const formattedTitle = capitalise(title);

    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
            </Head>

            <div className={className}>{children}</div>
        </>
    );
}
