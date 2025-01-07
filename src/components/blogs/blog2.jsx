import React from "react";

const Blog1 = () => {
  return (
    <div className="container my-5">
      <article className="blog-post">
        <h1 className="blog-title mb-4">
          What if we create an quora for film enthusiast ?
        </h1>

        <div className="meta-info mb-4">
          <span className="date">Jan 7, 2025</span>
          <span className="category ms-3 badge bg-primary">Thought</span>
        </div>

        <div className="blog-content">
          <section className="introduction mb-4">
            {/* <h2>Introduction</h2> */}
            <p>
              i am thinking to create an website or say an platform where people
              can come and give their opinion/review about an movies this site
              is not for professional critics instead of common people given
              their personal option about an movies and other can comment on it
              and upvote or downvote it.
            </p>
            <p>
              This is like an quora only for movies people are free to share
              what they are thinking and can post anything they want. It's like
              an global community for film enthusiast
            </p>
            <p> Why i want to make this ?</p>{" "}
            <p>
              {" "}
              I myself an film enthusiast and love to talk about movies and
              specially like to watch a lot of movies but i am bore of
              traditional mainstream movies and i think i had watch enough
              movies from Hindi cinema that i am out of movies now i didn't
              always wanna watch very artistic cinema instead i like to go with
              my mood. And films that align with my interest their are many
              movies out their that are very good but didn't actually align with
              my interest or what i wanna see in an movies.
            </p>{" "}
            <p>
              I can go to IMBD but they just rank movies based on reviews by
              critics.
            </p>{" "}
            <p>
              {" "}
              Their are Subreddit also but i had to find communities that align
              with my interest. Also lot of Subreddit didn't really talk about
              Hindi film/cinema. They are very global communities although it
              isn't bad they just talk what they are interested in maybe they
              haven't seen Hindi film or simply the interest didn't align.</p> <p> So
              being computer science student i thought what if i can make such a
              platform for me.(and for other too)
            </p>
          </section>

          <section className="prerequisites mb-4">
            <h2>Background :</h2>

            <p>
              I Few times ago already created an app that can recommend movies
              but of course that wasn't good enough so you can think of like
              this is an upgraded version of that app.,
            </p>
          </section>

          <section className="installation-steps mb-4">
            <h2>Update:</h2>
            <p>I will also thinking to integrate an AI feature in the App.</p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Blog1;
