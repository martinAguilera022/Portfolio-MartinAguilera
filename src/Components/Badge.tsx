import { ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px] group">
                {children}
            </span>
        </div>
    );
}
