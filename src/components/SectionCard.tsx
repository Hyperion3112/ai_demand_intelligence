interface SectionCardProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function SectionCard({ children, id, className = "" }: SectionCardProps) {
    return (
        <section
            id={id}
            className={`scroll-mt-24 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className}`}
        >
            {children}
        </section>
    );
}
