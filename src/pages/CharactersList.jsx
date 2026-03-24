import Page from "../components/common/Page";
import Header from "../components/common/Header";
import { hiragana } from "../data/hiragana";

export default function CharactersList() {
  return (
    <>
      <Page>
        <Header></Header>

        <div className="flex flex-row flex-wrap p-6 gap-4 items-center">
          {hiragana.map(({ character, id }) => (
            <>
              <div
                key={id}
                className="px-6 py-4 border border-2 border-slate-500"
              >
                <h4 className="text-2xl font-medium">{character} </h4>
                <small className="text-xs text-gray-400">{id}</small>
              </div>
            </>
          ))}
        </div>
      </Page>
    </>
  );
}
