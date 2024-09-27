import React from "react";
import { useState } from "react";
import CopyText from "./CopyText";

function ProjectsSection() {
  return (
    <section>
      <h3 className="pb-4 text-grey-800 font-medium">Recently,</h3>
      <div className="pb-8">
        <div className="mb-1 flex space-x-2">
          <h4 className="group text-grey-800">
            <span className="border-b-2 border-grey-300 hover:border-grey-800 font-medium">
              <a
                href="https://www.xrjobsboard.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                XR Jobs Board
              </a>
            </span>
            <span className="text-grey-400 group-hover:text-grey-800 font-medium">
              &#x2197;
            </span>
          </h4>
          <div className="px-2 py-0.5 bg-green-100 rounded-sm text-sm text-green-900 font-medium">
            Currently Building
          </div>
        </div>
        <p className="text-grey-500">
          Stop wasting time searching through countless job portals. All XR jobs
          and opportunities in one place.
        </p>
      </div>
      <div className="pb-8">
        <h4 className="group text-grey-800 mb-1">
          <span className="border-b-2 border-grey-300 hover:border-grey-800 font-medium">
            <a
              href="https://krystianzun.gumroad.com/l/xrdesignroadmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              XR Design Learning Roadmap
            </a>
          </span>
          <span className="text-grey-400 group-hover:text-grey-800 font-medium">
            &#x2197;
          </span>
        </h4>
        <p className="text-grey-500">
          Step-by-step, comprehensive guide to all essential skills to design
          extended realities.
        </p>
      </div>
      <div className="pb-8">
        <h4 className="group text-grey-800 mb-1">
          <span className="border-b-2 border-grey-300 hover:border-grey-800 font-medium">
            <a
              href="https://discord.com/invite/eUKt8mFqnb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Design Futures
            </a>
          </span>
          <span className="text-grey-400 group-hover:text-grey-800 font-medium">
            &#x2197;
          </span>
        </h4>
        <p className="text-grey-500">
          Community for all into XR, Design, 3D, AI and generally emerging and
          creative tech with weekly hang outs, world hopping sessions and themed
          discussions.
        </p>
      </div>
      <div className="pb-8">
        <h4 className="group text-grey-800 mb-1">
          <span className="border-b-2 border-grey-300 hover:border-grey-800 font-medium">
            <a
              href="https://lu.ma/touchsomegrass"
              target="_blank"
              rel="noopener noreferrer"
            >
              Touch Some Grass*
            </a>
          </span>
          <span className="text-grey-400 group-hover:text-grey-800 font-medium">
            &#x2197;
          </span>
        </h4>
        <p className="text-grey-500">
          Fun, informal meet-up where we chat about XR and creative tech in the
          great outdoors, immersed in the best reality (nature) ٩(
          ✩&apos;ω&apos;✩ )و
        </p>
      </div>
      <div className="pb-8 text-grey-800">
        <p className="pb-4">
          and
          <span className="group text-grey-800">
            <span>&nbsp;</span>
            <span className="border-b-2 border-grey-300 hover:border-grey-800 font-medium">
              <a
                href="https://krystianzun.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                subscribe to my newsletter
              </a>
            </span>
            <span className="text-grey-400 group-hover:text-grey-800 font-medium">
              &#x2197;
            </span>
          </span>{" "}
          where I share my learnings, ideas and links to anything I&apos;ve
          found interesting
        </p>
        <div>
          {/* 
                    place for input and button to subscribe 
                */}
        </div>
      </div>
      <p className="text-grey-800">
        I love meeting new people, feel free to drop me a line at
        <span className="group text-grey-800">
          <span>&nbsp;</span>
          <span className="border-b-2 border-gray-300 hover:border-gray-800 cursor-pointer inline-block font-medium">
            <CopyText
              text="krystian.zun@gmail.com"
              displayText="krystian.zun@gmail.com"
              hoverMessage="Click to copy"
            />
          </span>
        </span>
      </p>
      <hr className="w-full h-px bg-gray-300 border-0 my-14"></hr>
    </section>
  );
}

export default ProjectsSection;
