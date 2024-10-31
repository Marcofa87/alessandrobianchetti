import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const router = useRouter();
  const { token, email } = router.query;
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    async function verifyEmail() {
      if (token && email) {
        try {
          const response = await fetch(
            `/api/verify-email?token=${token}&email=${email}`
          );
          if (response.ok) {
            setStatus("Email verified successfully!");
          } else {
            setStatus("Verification failed.");
          }
        } catch {
          setStatus("Verification failed.");
        }
      }
    }
    verifyEmail();
  }, [token, email]);

  return <div>{status}</div>;
}
