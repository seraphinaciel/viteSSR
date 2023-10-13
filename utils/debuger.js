// gsap

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const gsapLifeCycleCheck = id => {
  return {
    onRefresh: args => {
      console.log(`${id}/onRefresh/args`, args);
    },
    onLeave: args => {
      console.log(`${id}/onLeave/args`, args);
    },
    onEnter: args => {
      console.log(`${id}/onEnter/args`, args);
    },
    onEnterBack: args => {
      console.log(`${id}/onEnterBack/args`, args);
    },
    onLeaveBack: args => {
      console.log(`${id}/onLeaveBack/args`, args);
    },
    onScrubComplete: args => {
      console.log(`${id}/onScrubComplete/args`, args);
    },
    onToggle: args => {
      console.log(`${id}/onUpdate/args`, args);
    },
    onUpdate: args => {
      console.log(`${id}/update/args`, args);
    },
  };
};

export const gsapIsInScreen = (target, callback = [() => {}, () => {}]) => {
  const [onIn, onOut] = callback;
  return {
    onUpdate: self => {
      const isInViewport = ScrollTrigger.isInViewport(target);

      console.group(`${target}`);
      console.log(`isInViewport`, isInViewport);
      console.log(`onUpdate/args`, self);
      console.groupEnd(`${target}`);

      if (!isInViewport) {
        console.log("out");
        onIn(self);
      } else {
        console.log("in");
        onOut(self);
      }
    },
  };
};
