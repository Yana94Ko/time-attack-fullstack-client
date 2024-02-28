import Page from "@/components/Page";
import SignUpForm from "./_components/SignUpForm";

function SignUp() {
  return (
    <Page title="회원으로 가입하기" fullWidth={false}>
      <SignUpForm />
    </Page>
  );
}

export default SignUp;
