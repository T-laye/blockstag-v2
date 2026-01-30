export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen verify-bg overflow-y-auto">
      {children}
    </div>
  );
}
