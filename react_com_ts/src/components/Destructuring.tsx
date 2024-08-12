type Props = {
  title: string;
  content: string;
  commentQtd: number;
  tags: string[];
  category: Category;
};

export enum Category {
  TS = "Typescript",
  JS = "Javascript",
  p = "Python",
}

const Destructuring = ({
  title,
  content,
  commentQtd,
  tags,
  category,
}: Props) => {
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
      <p>Categoria: {category}</p>
    </div>
  );
};

export default Destructuring;
