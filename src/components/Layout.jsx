import { Helmet as Head } from "react-helmet";
import { capitalize as capitalise } from "lodash";

export default function Layout({
    children,
    title,
    appendClass = "",
    className = "h-full w-full",
}) {
    const formattedTitle = capitalise(title);
    className = `${className} ${appendClass}`.trim();

    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
            </Head>

            <div className={className}>{children}</div>
        </>
    );
}
