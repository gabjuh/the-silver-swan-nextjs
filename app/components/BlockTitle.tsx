
const BlockTitle = ({
  text,
  isWhite
}: {
  text: string;
  isWhite?: boolean;
}) => {
  return (
    <h2 className="md:text-4xl text-3xl mb-10 text-center mx-3 whitespace-nowrap">
    {text.split('|').map((txt, i) => {
      if (i === 0) {
        return txt;
      }
      return <span className="block lg:inline whitespace-nowrap" key={i}> {txt}</span>
    })}
  </h2>
  )
}

export default BlockTitle