import { ComponentProps, forwardRef } from "react";
import { IconArrowBack } from "@tabler/icons-react";
import cx from "@/utils/cx";
import { Avatar } from "./message";

export interface Props extends ComponentProps<"form"> {
  inputProps: ComponentProps<"input">;
  buttonProps: ComponentProps<"button">;
}

const Form = ({ inputProps, buttonProps, onSubmit }: Props, ref: any) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative m-auto flex items-center gap-4 justify-center bg-zinc-200 dark:bg-zinc-900"
      ref={ref}
    >
      <Avatar isUser={true} className="md:size-10 bg-gray-300" />

      <input
        placeholder="Type a message..."
        required
        {...inputProps}
        className={cx(
          "h-10 md:h-12 pl-4 pr-12 flex-1 rounded-xl",
          "border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100",
          "bg-zinc-200 dark:bg-zinc-800",
          inputProps.className,
        )}
        type="text"
      />

      <button
        {...buttonProps}
        type="submit"
        tabIndex={-1}
        className={cx(
          "absolute right-3 top-1/2 -translate-y-1/2",
          "opacity-50",
        )}
      >
        <IconArrowBack stroke={1.5} className="text-slate-800 dark:text-slate-100" />
      </button>
    </form>
  );
};

export default forwardRef(Form);
