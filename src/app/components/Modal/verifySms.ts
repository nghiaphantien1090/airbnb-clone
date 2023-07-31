import twilio from 'twilio'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid,authToken)

const VerifySms = client.verify.v2.services
                .create({friendlyName: 'verify from Nghia'})
                .then(res=>res.sid)

export default VerifySms