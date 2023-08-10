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
        className="bg-black px-3 py-2 my-5 rounded font-bold shadow mx-auto block text-white"
      >
        {request ? "On progress..." : data ? "Ask aging" : "Ask"}
      </button>
      {error && <p className="text-rose-600">{error.message}</p>}
      {data && (
        <article className="bg-black/80 backdrop-blur p-3 rounded my-5 text-white">
          <p className="text-sm">{data.name}</p>
        </article>
      )}
    </div>
  );
};
export default FortuneTeller;
