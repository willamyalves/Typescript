type Props = {
  title: string;
  content: string;
  commentQtd: number;
  tags: string[];
};

const Destructuring = ({ title, content, commentQtd, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQtd}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Destructuring;
