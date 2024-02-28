import { AuthProvider } from "@/contexts/auth.context";
import { ReactQueryProvider } from "@/react-query/react-query.context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
