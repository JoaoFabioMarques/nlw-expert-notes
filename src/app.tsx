import { NoteCard } from "./components/note-card.tsx";
import { NewNoteCard } from "./components/new-note-card.tsx"
import logo from "/assets/logo-nlw-expert.svg";

const note={
  date: new Date(),
  content: 'Hello World'
}

const newnote={
  date: new Date(),
  content: 'teste'
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight
          outline-none
          placeholder: text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        
        <NewNoteCard newnote={newnote}/>

        <NoteCard note={note}/>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">Há 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            temporibus sequi quam necessitatibus dolore officiis exercitationem
            vitae quibusdam in, qui, sapiente deleniti, expedita numquam id
            laborum voluptate quod. Blanditiis, aspernatur? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quis debitis soluta ullam
            aspernatur repellendus doloremque dolor recusandae consequuntur
            suscipit neque accusamus ipsam reiciendis laboriosam assumenda
            nesciunt, voluptate eveniet? Est, odit.
          </p>
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t
          from-black/60 to-black/0 pointer-events-none"
          />
        </div>
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">Há 5 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            temporibus sequi quam necessitatibus dolore officiis exercitationem
            vitae quibusdam in, qui, sapiente deleniti, expedita numquam id
            laborum voluptate quod. Blanditiis, aspernatur? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quis debitis soluta ullam
            aspernatur repellendus doloremque dolor recusandae consequuntur
            suscipit neque accusamus ipsam reiciendis laboriosam assumenda
            nesciunt, voluptate eveniet? Est, odit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ipsum, nobis perspiciatis. Esse velit,
            earum odit natus mollitia assumenda ad aspernatur dicta sequi
            sapiente praesentium rerum reprehenderit enim perspiciatis quae
            sunt.
          </p>
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t
          from-black/60 to-black/0 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
