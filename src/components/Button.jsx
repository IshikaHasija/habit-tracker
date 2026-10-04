import { twMerge } from "tailwind-merge"

function Button({ children, className, variant = "primary", ...props }) {
    return (
        <button
            {...props}
            className={twMerge(
                "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
                getVariantStyles(variant),
                className,
            )}>
            {children}
        </button>
    );
}

export default Button;

function getVariantStyles(variant) {
    switch (variant) {
        case "primary":
            return "bg-blue-500 hover:bg-blue-600 text-white"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            return "bg-zinc-700 text-white"
    }
}
