import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}

// pages/SignUpPage.js
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
}
