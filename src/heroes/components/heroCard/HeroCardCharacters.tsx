interface Props {
  alter_ego: string
  characters: string
}

export default function HeroCardCharecters ({ characters }: Props): JSX.Element {
  return (
    <div>
      <h5 className="font-light">Characters: </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {characters}
      </p>
    </div>
  )
}
