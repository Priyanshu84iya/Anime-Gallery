import { useEffect } from "react";
import { toast } from "sonner";

export const useMobileWarning = () => {
  useEffect(() => {
    const showWarning = () => {
      if (window.innerWidth < 768) {
        toast.warning("The demo may not work as expected on smaller screens.");
      }
    };

    const timeoutId = setTimeout(showWarning, 1000);
    window.addEventListener("resize", showWarning);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", showWarning);
    };
  }, []);
};