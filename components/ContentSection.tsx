import { cn } from "@/lib/utils";

interface ContentSectionProps {
    id: string;
    title: string;
    className?: string;
    children: React.ReactNode;
}

export default function ContentSection({ id, title, className, children }: ContentSectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 relative z-10", className)}>
            <div className="container mx-auto px-4">
                <div className="mb-10 flex items-center gap-4">
                    <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-widest">{title}</h2>
                    <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 prose prose-invert prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                    {children}
                </div>
            </div>
        </section>
    );
}
