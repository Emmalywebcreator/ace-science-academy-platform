type SectionHeadingProps = {
    title: string;
    subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-blue-900">{title}</h2>
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>
    )
}