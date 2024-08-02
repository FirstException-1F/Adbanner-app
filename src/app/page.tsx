import { promises as fs } from "fs";
import Hero from "./components/Hero";
import { UserData } from "./types";

export default async function Home() {
  const fileContents = await fs.readFile( process.cwd() + "/src/app/data/Data.json","utf8" );
  const data: UserData[] = JSON.parse(fileContents);
  return <Hero data={data} />;
}
