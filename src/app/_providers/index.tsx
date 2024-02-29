import { AuthProvider } from "@/contexts/auth.context";
import { UtilProvider } from "@/contexts/util.context";
import { ReactQueryProvider } from "@/react-query/react-query.context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <UtilProvider>{children}</UtilProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
