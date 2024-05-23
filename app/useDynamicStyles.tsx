import { useEffect } from "react";
import { prefix } from "@/prefix";

export const useDynamicStyle = (filePath: string) => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${prefix}${filePath}`;
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, [filePath]);
};
