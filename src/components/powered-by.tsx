const PoweredBy = () => {
  return (
    <p className="mt-4 text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">
      This is a prototype for a RAG chatbot using data scraped from the{" "}
      <a href="https://docs.vendia.com/" target="_blank">
        Vendia Docs
      </a>{" and "}
      <a href="https://vendia.com/" target="_blank">
        Website
      </a>
      . <br /> Built using{" "}
      <a href="https://www.langchain.com/" target="_blank">
        LangChain
      </a>
      ,{" "}
      <a href="https://upstash.com" target="_blank">
        Upstash Vector
      </a>{" "}
      and{" "}
      <a href="https://sdk.vercel.ai" target="_blank">
        Vercel AI SDK
      </a>{" "}
      ・{" "}
      <a href="https://github.com/ielm/vendia-rag" target="_blank">
        Source Code
      </a>
    </p>
  );
};

export default PoweredBy;
