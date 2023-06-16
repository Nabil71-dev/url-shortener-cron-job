const { schedule } =require("@netlify/functions")
const axios = require('axios');

const handler = async function(event, context) {
        try {
        const response = axios.get(`https://url-shortner-nabil-be.vercel.app/scheduler/cron-job`);
        console.log("Successfully done",response)
    } catch (error) {
        console.log("Have some error on it",error)
    }
};

exports.handler = schedule("59 23 * * *", handler);