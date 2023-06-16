const { schedule } =require("@netlify/functions")

// const handler = schedule("* * * * *",async(event) => {
//     try {
//         const response = axios.get(`http://localhost:8080/scheduler/expire-urls`);
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// })

// module.exports = { handler }

const handler = async function(event, context) {
    console.log("Schedule function runing")
    return { statusCode: 200, body: "It's running", status: true };
};

exports.handler = schedule("* * * * *", handler);