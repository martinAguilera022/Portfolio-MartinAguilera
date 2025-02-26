import { ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <div className="flex items-center group ">
            <span className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                {children}
            </span>
        </div>

    );
}
