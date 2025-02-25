import React from "react";

const MviPage = () => {
  return (
    <main className="mb-32 mt-24">
      <section className="m-auto flex max-w-md flex-col gap-12 text-primary text-lg lowercase">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-medium">
            validate your idea by end of the week
          </h1>
          <p>
            Too often, founders jump straight into building an MVP that takes
            weeks and costs thousands of $$$, only to find out it&apos;s not
            what users want.
          </p>
          <p>
            There’s a faster and better way to see if your idea has real demand.
          </p>
        </div>
        <div className="w-full flex justify-center text-base flex-col items-center gap-2">
          <button className="bg-black cursor-pointer text-white p-4 w-full max-w-sm">
            validate&nbsp;&nbsp;&nbsp;( $1499 )
          </button>
          <p className="text-grey-600 text-sm">5 – 7 days</p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">How?</h3>
          <p>
            I partner with founders and startup and offer a shortcut to learn
            without building and launching.
          </p>
          <p>
            I&apos;ll help you validate your idea and answer business questions
            by designing, prototyping, and testing ideas with your real
            customers.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">
            In just a few days, we&apos;ll:
          </h3>
        </div>
      </section>
    </main>
  );
};

export default MviPage;
