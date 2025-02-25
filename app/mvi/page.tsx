import React from "react";
import Verified from "@/components/icons/Verified";

const MviPage = () => {
  return (
    <main className="mb-32 mt-24 text-grey-800">
      <section className="m-auto flex max-w-md flex-col gap-12 text-primary text-lg lowercase">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-2xl font-medium text-black">
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
          <h3 className="text-xl font-medium text-black">How?</h3>
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
          <h3 className="text-xl font-medium text-black">
            In just a few days, we&apos;ll:
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center transition-all duration-300 ease-in-out hover:ml-2">
              <Verified className="mr-2 mt-0.5 text-green-500" size={24} />
              Define clear success metrics and hypotheses
            </li>
            <li className="flex items-center transition-all duration-300 ease-in-out hover:ml-2">
              <Verified className="mr-2 mt-0.5 text-green-500" size={24} />
              Build a rapid prototype tailored to your needs
            </li>
            <li className="flex items-start transition-all duration-300 ease-in-out hover:ml-2">
              <Verified className="mr-2 mt-0.5 text-green-500" size={24} />
              Test with real users to gauge trust, attention, and willingness to
              pay
            </li>
            <li className="flex items-start transition-all duration-300 ease-in-out hover:ml-2">
              <Verified className="mr-2 mt-0.5 text-green-500" size={24} />
              <span className="flex flex-col">
                Deliver actionable insights and a clear next step <br />
                <span className="text-grey-500 text">
                  (whether that’s refining your concept or building your MVP
                  with confidence)
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium text-black">Why This Works</h3>
          <p>Building an MVP is expensive (time & money).</p>
          <p>
            By testing demand upfront, you avoid weeks of wasted development and
            focus on what users actually want.
          </p>
          <p>
            Plus, we can help you kickstart a community of early
            adopters—turning your first testers into your future customers.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MviPage;
