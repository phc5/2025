import React from "react";

export default function Experience() {
  return (
    <section className="flex flex-col items-center py-28 px-4 lg:px-8">
      <h2 className="flex justify-between w-full mb-6 lg:mb-8">
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
          Experience
        </span>
      </h2>
      <div className="flex flex-col gap-4 lg:gap-5 p-10 bg-neutral-900 rounded-xl w-full">
        <div className="grid grid-cols-12 text-neutral-100 mb-8">
          <div className="col-span-2 font-semibold text-2xl">
            <div className="flex flex-col ">
              <p>Now</p>
              <p>-</p>
              <p>August 2021</p>
            </div>
          </div>
          <div className="col-span-2 font-semibold text-4xl">Meta</div>
          <div className="col-span-7 col-start-6">
            <p className="text-neutral-100 font-medium">
              Building developer infrastructure and tools that help Meta
              engineers monitor, track, and diagnose the performance,
              reliability, and stability of their applications (Facebook,
              Instagram, WhatsApp, Messenger, Workplace, Oculus, Portal).
              Primarily working on UI engineering and data visualizations in
              React, GraphQL, and Hack. Key achievements include consolidating
              fragmented Lab UIs into a unified platform, merging two detection
              platforms to improve user experience, launching a 0-to-1 Incident
              Management tool for faster SEV resolution, and shipping a decision
              tree authoring tool enabling experts to federate incident
              investigation knowledge. Also leveraged AI agents to accelerate
              development tasks and code quality improvements across the team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 text-neutral-100 mb-8">
          <div className="col-span-2 font-semibold text-2xl">
            <div className="flex flex-col">
              <p>July 2021</p>
              <p>-</p>
              <p>July 2020</p>
            </div>
          </div>
          <div className="col-span-2 font-semibold text-4xl">
            Amazon Web Services
          </div>
          <div className="col-span-7 col-start-6">
            <p className="text-neutral-100 font-medium">
              Developed and maintained AWS Activate Console and internal Admin
              CMS. Led design and development of Tech Hub for the console's
              October 2020 GA launch, creating an alternative solution after the
              original design was obsoleted. Collaborated with stakeholders on
              design and security reviews, integrated multiple AWS services and
              internal CMS, and successfully launched to production. Enhanced
              code quality by writing front-end unit and integration tests for
              untested components. Implemented new internal analytics framework
              to enable data-driven decision-making. Built Slack bot integration
              using AWS Chatbot and SNS to alert engineers of critical events in
              real-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 text-neutral-100 ">
          <div className="col-span-2 font-semibold text-2xl">
            <div className="flex flex-col">
              <p>July 2020</p>
              <p>-</p>
              <p>May 2017</p>
            </div>
          </div>
          <div className="col-span-2 font-semibold text-4xl">
            Kelley Blue Book
          </div>
          <div className="col-span-7 col-start-6">
            <p className="text-neutral-100 font-medium">
              Built and maintained microservices and web applications using
              React, Node, GraphQL, and AWS. Developed UI components for
              internal component library. Optimized application performance
              using webpack, Lighthouse, New Relic, Splunk, and CloudWatch,
              implementing lazy loading, code-splitting, and image
              optimizations. Extended backend capabilities by architecting a C#
              scheduled data process that pulled from multiple internal APIs in
              parallel and aggregated data for cross-team consumption. Focused
              on performance monitoring and improvements across the full stack
              to enhance user experience and system efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
