import IconCompany from "./IconCompany";

type Props = {
  name: string;
  image: string;
  description: string;
  link: string;
};

export default function Card({ name, image, description, link }: Props) {
  return (
    <article className="main__card">
      <header className="main__card-header">
        <IconCompany />
      </header>
      <div className="main__card-image">
        <img
          src={image}
          alt={`This is a image generate by a artificial intelligence of a ${name}`}
        />
      </div>
      <footer className="main__card-footer">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <a href={link} target="_blank">
          Learn more
        </a>
      </footer>
    </article>
  );
}
