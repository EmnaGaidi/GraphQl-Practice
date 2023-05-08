export const Subscription = {
  TestCv: {
    subscribe: (parent, args, { pubSub }, info) => {
      return pubSub.subscribe("TestCv");
    },
    resolve: (payload) => {
      return payload;
    },
  },
};
