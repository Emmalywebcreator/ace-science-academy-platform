type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    className?: string;
};

export default function Button({
    children,
    variant = "primary",
    href,
    className ="",
}: ButtonProps) {
    const base = "inline-flex items-center justify-center round-lg px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95";
    
    const variants = {
        primary:
            "bg-blue-700 text-white hover:blue-800 hover:shadow-lg",

        secondary:
            "border border-blue-700 bg-white text-blue-700 hover:bg-blue-50",
    };

    if (href) {
        return (
            <a 
                href={href}
                className={`${base} ${variants[variant]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}
