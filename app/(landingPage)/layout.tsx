import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const landingLayout =  async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const {isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) {
    redirect("/dashboard");
  }
  console.log(isUserAuthenticated, "isUserAuthenticated");
  

  return (

    <div>
      {children}
    </div>
  )
}

export default landingLayout
