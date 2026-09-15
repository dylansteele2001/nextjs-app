import { marked } from "marked";

const markdown = `
# Dylan Steele

> Hi im Dylan ima 25 year old student from Stillorgan Dublin
`;

export const revalidate = 300;

export default function Home() {
  return (
    <main
      className="prose min-h-screen bg-slate-50 px-6 py-10 text-slate-950 mx-auto"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

