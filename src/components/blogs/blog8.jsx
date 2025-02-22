import React from "react";

const Blog8 = () => {
  return (
    <div className="container my-5">
      <article className="blog-post">
        <h1 className="blog-title mb-4">
          Creating an app for my college
        </h1>

        <div className="meta-info mb-4">
          <span className="date">Jan 26, 2025</span>
          <span className="category ms-3 badge bg-primary">Thought</span>
        </div>

        <div className="blog-content">
          <section className="introduction mb-4">
            {/* <h2>Introduction</h2> */}
            <p>
              Date: 22-02-2025 time: 11:51PM <br />So, I am create an app for my
              college (actually i am university) i created first version of it
              and it look like an shit but it works and do the basic and the
              main functionality of the app that is to notify messages. here is
              the first look of the app :<br />
              <p></p>
              <img src="/blog8.image.png" alt="" srcset="" height={500} width={900} /><p></p>
               <p>Right now it is performing the
              basic work of notification in real time using socket.io but i need
              to add few things.. - Logout, Del, Edit functionality (right now
              it only have button) - Notification alert, right now i am getting
              messages in real time but not an notification like an native app -
              Then i will deploy this app with these basic functionalities for
              now These are the things that i wanna do for now and i and i will
              keeping updating.. Thanks for reading :)
              </p>
            </p>
            <p></p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Blog8;
