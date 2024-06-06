import React from "react";
import Markdown from "markdown-to-jsx";
import cx from "@/utils/cx";
import { Message as MessageProps } from "ai/react";
import UpstashLogo from "@/components/upstash-logo";
import { IconUser } from "@tabler/icons-react";
import Image from "next/image";

const Message: React.FC<MessageProps> = ({ content, role }) => {
  const isUser = role === "user";

  return (
    <article
      className={cx(
        "mb-4 flex items-start gap-4 p-4 md:p-5 rounded-2xl",
        isUser ? "" : "bg-zinc-200 dark:bg-zinc-800",
      )}
    >
      <Avatar isUser={isUser} />
      <Markdown
        className={cx(
          "py-1.5 md:py-1 space-y-4",
          isUser ? "font-semibold text-zinc-900 dark:text-zinc-200 " : " text-zinc-900 dark:text-zinc-100",
        )}
        options={{
          overrides: {
            ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
            ul: ({ children }) => <ol className="list-disc">{children}</ol>,
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

const Avatar: React.FC<{ isUser?: boolean; className?: string }> = ({
  isUser = false,
  className,
}) => {
  return (
    <div
      className={cx(
        "flex items-center justify-center size-8 shrink-0 rounded-full",
        isUser ? "text-zinc-900 dark:text-zinc-300" : "text-zinc-50 dark:text-zinc-100",
        className,
      )}
    >

      {isUser ?
        <Image src="https://avatar.iran.liara.run/public/girl"
          width={30}
          height={30}
          alt="Ivan"
        /> : <Image src="/favicon.png"
          width={30}
          height={30}
          alt="Vendia"
        />}
    </div>
  );
};

export default Message;
export { Avatar };
