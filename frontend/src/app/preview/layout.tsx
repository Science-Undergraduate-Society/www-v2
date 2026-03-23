// Preview routes — hides the site navbar and footer so the iframe
// in the internal tool shows only page content.
export default function PreviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style>{`header, footer { display: none !important; }`}</style>
            {children}
        </>
    );
}
