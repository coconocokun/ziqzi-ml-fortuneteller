import HttpError from "@/lib/HttpError";
import { TellMeData } from "@/pages/api/fortune";
import { FC, useEffect, useState } from "react";

const FortuneTeller: FC<{
  className?: string;
}> = (props) => {
  const [request, setRequest] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TellMeData | null>(null);

  useEffect(() => {
    if (request) {
      const abortController = new AbortController();
      setError(null);
      fetch("/api/fortune", { signal: abortController.signal })
        .then((response) => {
          if (!response.ok) {
            throw new HttpError(response.status, "/api/fortune");
          }
          return response.json();
        })
        .then(setData)
        .catch(setError)
        .finally(() => {
          setRequest(false);
        });
      return abortController.abort.bind(abortController);
    }
  }, [request]);

  return (
    <div className={props.className}>
      <button
        type="button"
        disabled={request}
        onClick={() => setRequest(true)}
        className="bg-blue-700 min-w-[10rem] px-3 py-2 mb-10 text-lg md:text-xl lg:text-2xl rounded font-bold shadow mx-auto block text-white hover:bg-blue-600 active:bg-blue-800 disabled:grayscale"
      >
        {request ? "On progress..." : data ? "Ask again" : "Ask"}
      </button>
      {error && <p className="text-rose-600">{error.message}</p>}
      {data && (
        <article className="border border-black/50 bg-black/40 backdrop-blur-xl p-3 md:p-5 xl:p-7 my-5 text-white max-w-screen-md 2xl:max-w-[50%] mx-auto shadow rounded-xl">
          <p className="text-base">{data.message}</p>
        </article>
      )}
    </div>
  );
};
export default FortuneTeller;
