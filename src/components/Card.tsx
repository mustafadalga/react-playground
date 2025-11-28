export const Card = ({ title, children, footer }) => {
    return (
        <div className="rounded-xl border bg-white shadow-xs p-4 transition-all hover:scale-105 hover:-translate-y-1 delay-100 duration-300">
            {title && <h2 className="text-lg font-medium mb-3">{title}</h2>}
            <div className="text-sm text-gray-700">{children}</div>
            {footer && <div className="mt-4 pt-3 border-t">{footer}</div>}
        </div>
    );
};
