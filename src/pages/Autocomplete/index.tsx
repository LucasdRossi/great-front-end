import { useEffect, useState } from "react";
import { withHeader } from "../../components/Header";
import { debounce } from "../../utils/debounce";

import Autocomplete from "./components/Autocomplete";

interface Suggestion {
  word: string;
  score: number;
}

const debounceTime = 500;
const minLength = 1;

const fetchData = (query: string): Promise<Suggestion[]> => {
  return fetch(`https://api.datamuse.com/sug?s=${query}`)
    .then((data) => data.json())
    .catch((error) => {
      console.error(error);
    });
};

function random(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const OPTIONS = Array.from(new Array(10000))
  .map(() => random(10 + Math.ceil(Math.random() * 20)))
  .sort((a: string, b: string) =>
    a.toUpperCase().localeCompare(b.toUpperCase())
  );

function AutocompletePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState<Suggestion[]>([]);

  const handleChangeInput = (value: string) => {
    setValue(value);
  };

  const handleSelectItem = (item: Suggestion) => {
    setValue(item.word);
  };

  useEffect(() => {
    if (value.length > minLength)
      debounce(() => {
        setIsLoading(true);
        return fetchData(value)
          .then((result) => {
            setData(result);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, debounceTime);
    else {
      setData([]);
    }
  }, [value]);

  return (
    <main
      style={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Autocomplete
        onChange={handleChangeInput}
        onSelect={handleSelectItem}
        data={data}
        value={value}
        renderItem={(item) => item.word}
        loading={isLoading}
      />

      <Autocomplete data={OPTIONS} renderItem={(item) => item} />
    </main>
  );
}

export default withHeader(AutocompletePage);
