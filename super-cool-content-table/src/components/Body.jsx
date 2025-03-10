import box from "../assets/box3d-center.svg";
import { ImageBox } from "./imageBox/ImageBox";

export const Body = () => {
  const coverImage = ["images/article-cover.jpg"];

  return (
    <main className="body">
      <header>
        <div>
          <h1 id="introduction">
            The Best Super cars from 2020 to 2024: A Review of Speed and
            Innovation
          </h1>
          <p>March 25, 2025</p>
        </div>
        <a href="">
          <img src={box} alt="box icon svg" />
        </a>
      </header>

      <article>
        <ImageBox images={coverImage} />
        <p>
          The supercar industry has undergone a breathtaking evolution from 2020
          to 2024, blending cutting-edge technology, striking design, and
          record-breaking performance. This era witnessed the rise of hybrid
          powertrain, ultra-lightweight materials, and mind-bending acceleration
          figures — pushing the boundaries of what’s possible on four wheels.
          Let’s take a ride through the most iconic supercar of this
          transformative period:
        </p>
      </article>
      <h2>2020 and Beyond: Pioneers of a New Era</h2>
      <article id="mcLaren-speedtail">
        <h3>McLaren Speedtail</h3>
        <ImageBox images={["images/article-mclaren.jpg"]} />
        <p>
          {" "}
          <strong>• Year:</strong>Introduced in 2019, gaining iconic status by
          2020.
        </p>
        <p>
          <strong>• Power:</strong>A hybrid 4.0-liter twin-turbo V8 combined
          with an electric motor, delivering a jaw-dropping 1,036 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> McLaren’s fastest car, with a top
          speed of 250 mph.
        </p>
        <p>
          <strong>• Design:</strong> A futuristic, teardrop-shaped masterpiece,
          meticulously crafted for maximum aerodynamics. The streamlined body
          and central driving position pay homage to the legendary McLaren F1,
          blending art and science seamlessly.
        </p>
      </article>
      <article id="ferrari-sf90-stradale">
        <h3>Ferrari SF90 Stradale</h3>
        <ImageBox images={["images/article-ferrari.jpg"]} />
        <p>
          <strong>• Year:</strong> Officially launched in 2019 but widely
          recognized in 2020.
        </p>
        <p>
          <strong>• Power:</strong> Ferrari’s first plug-in hybrid, packing 986
          horsepower — a combination of a twin-turbo V8 and three electric
          motors.
        </p>
        <p>
          <strong>• Performance:</strong> A blistering 0-62 mph in just 2.5
          seconds.
        </p>
        <p>
          <strong>• Innovation:</strong> The SF90 isn’t just about raw power; it
          offers a 15-mile electric range, merging Ferrari’s racing pedigree
          with future-forward hybrid technology.
        </p>
      </article>
      <article id="lamborghini-sian">
        <h3>Lamborghini Sián</h3>
        <ImageBox images={["images/article-lamborghini.jpg"]} />
        <p>
          <p>
            <strong>• Year:</strong> Introduced in 2019, with roaring attention
            in 2020.
          </p>
          <p>
            <strong>• Power:</strong> A naturally aspirated V12 paired with a
            supercapacitor-based electric motor, generating 819 horsepower.
          </p>
          <p>
            <strong>• Performance:</strong> Launches from 0 to 60 mph in 2.8
            seconds.
          </p>

          <p>
            <strong>• Design:</strong> The Sián embraces Lamborghini’s
            aggressive lines but adds a sci-fi twist — with Y-shaped headlights,
            hexagonal taillights, and bold aerodynamic elements inspired by the
            legendary Countach.
          </p>
        </p>
      </article>
      <h2>2022 and 2023: The Rise of the Hybrid Supercar</h2>
      <article id="rimac-nevera">
        <h3>Rimac Nevera</h3>
        <ImageBox images={["images/article-rimac.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2022.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="pagani-huayra-bc-roadster">
        <h3>Pagani Huayra BC Roadster</h3>
        <ImageBox images={["images/article-pagani.jpg"]} />
        <p>
          <strong>• Year:</strong> Continued production into 2022.
        </p>
        <p>
          <strong>• Power:</strong> A handcrafted 6.0-liter twin-turbo
          Mercedes-AMG V12, pushing 789 horsepower.
        </p>
        <p>
          <strong>• Design:</strong> Every inch of the Huayra BC is a work of
          art, blending carbon fiber with leather interiors and bespoke details
          — a perfect balance of raw performance and timeless elegance.
        </p>
        <p>
          <strong>• Exclusivity:</strong> With only 40 units produced, it’s as
          rare as it is beautiful.
        </p>
      </article>
      <h2>2024: Breaking the Boundaries</h2>

      <article id="bugatti-chiron-bolide">
        <h3>Bugatti Chiron Bolide</h3>
        <ImageBox images={["images/article-bugatti.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="pagani-utopia">
        <h3>Pagani Utopia</h3>
        <ImageBox images={["images/article-pagani-utopia.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="lamborghini-revuelto">
        <h3>Lamborghini Revuelto</h3>
        <ImageBox images={["images/article-lamborghini-revuelto.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="mcLaren-artura">
        <h3>McLaren Artura</h3>
        <ImageBox images={["images/article-mclaren-artura.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="aston-martin-valkyrie">
        <h3>Aston Martin Valkyrie</h3>
        <ImageBox images={["images/article-aston-martin-valkyrie.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <article id="koenigsegg-cc850">
        <h3>Koenigsegg CC850</h3>
        <ImageBox images={["images/article-koenigsegg-cc850.jpg"]} />
        <p>
          <strong>• Year:</strong> Production began in 2023.
        </p>
        <p>
          <strong>• Power:</strong> A fully electric hypercar with four
          individual motors producing a mind-blowing 1,914 horsepower.
        </p>
        <p>
          <strong>• Performance:</strong> Rockets from 0 to 60 mph in just 1.85
          seconds — faster than gravity pulling you down!
        </p>
        <p>
          <strong>• Innovation:</strong> The Nevera is a technological tour de
          force, featuring advanced torque vectoring, all-wheel drive, and
          AI-assisted driving dynamics, signaling a bold new era for electric
          performance.
        </p>
      </article>
      <footer>
        <h2>The Future of Supercars: Innovation Meets Speed</h2>
        <p>
          The 2020 to 2024 era has redefined the supercar landscape — merging
          jaw-dropping performance with cutting-edge technology and a growing
          focus on sustainability. From Ferrari’s hybrid revolution to Rimac’s
          electric speed records, these cars don’t just push the limits — they
          shatter them.
        </p>
        <p>
          Supercars are no longer just about roaring V12s or sleek designs;
          they’re about what lies ahead — combining art, science, and
          heart-pounding adrenaline in one seamless package.
        </p>
      </footer>
    </main>
  );
};
