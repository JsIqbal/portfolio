// "use client";

// import { Link } from "@nextui-org/link";
// import { Tooltip } from "@nextui-org/react";

// interface ToolTipProps {
//     content: string;
//     elementContent?: string | React.ReactNode;
//     className?: string | "";
//     href?: string | "";
//     target?: string | "";
// }

// export default function ToolTipTool({
//     content,
//     elementContent,
//     className,
//     href = "#",
//     target = "_self",
//     ...props
// }: ToolTipProps) {
//     return (
//         <Tooltip content={content}>
//             <Link className={className} href={href} isExternal {...props}>
//                 {elementContent}
//             </Link>
//         </Tooltip>
//     );
// }
"use client";

import dynamic from "next/dynamic";
import { Link } from "@nextui-org/link";
import { useEffect } from "react";

const Tooltip = dynamic(
    () => import("@nextui-org/react").then((mod) => mod.Tooltip),
    {
        ssr: false,
    }
);

interface ToolTipProps {
    content: string;
    elementContent?: string | React.ReactNode;
    className?: string | "";
    href?: string | "";
    target?: string | "";
}

export default function ToolTipTool({
    content,
    elementContent,
    className,
    href = "#",
    target = "_self",
    ...props
}: ToolTipProps) {
    useEffect(() => {
        // Ensure the Tooltip component is initialized on the client-side
        Tooltip;
    }, []);

    return (
        <Tooltip content={content}>
            <Link className={className} href={href} isExternal {...props}>
                {elementContent}
            </Link>
        </Tooltip>
    );
}
