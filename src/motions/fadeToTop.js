export default {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: s => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: s, // this parameter value comes from custom={1} prop
        },
    }),
    hover: { scale: 0.8, transition: { duration: 1 } },
    tap: { scale: 1.2, transition: { duration: 1 } },
};
