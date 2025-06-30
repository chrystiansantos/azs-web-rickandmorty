import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

type InputSearch = InputHTMLAttributes<HTMLInputElement>

export function InputSearch({ ...rest }: InputSearch) {
  return (
    <label
      className="flex items-center gap-2 mt-20 border border-slate-400 outline outline-white rounded-lg px-2 focus-within:outline-slate-50"
    >
      <Search />
      <input
        className="h-10 w-full bg-transparent text-white outline-0"
        placeholder="Encontre seu episódio favorito pelo nome"
        {...rest}
      />
    </label>
  )
}