import ReactQueryProvider from "../../providers/ReactQueryProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
