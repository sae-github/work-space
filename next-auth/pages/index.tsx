import { Button } from "@/components/atoms/Button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <header className="bg-sky-700 h-[50px] text-white font-semibold font-mono flex items-center px-3 justify-between drop-shadow-md">
        <p>NextAuthjs_Work</p>
        {session ? (
          <div className="flex items-center">
            {session.user?.image && (
              <img
                src={session.user?.image}
                alt=""
                className="rounded-full w-8 h-8 mr-2"
              />
            )}
            <span className="mr-12">{session.user?.name}</span>
            <Button onClick={signOut}>ログアウト</Button>
          </div>
        ) : (
          <Button onClick={signIn}>ログイン</Button>
        )}
      </header>
      <main></main>
    </>
  );
}
