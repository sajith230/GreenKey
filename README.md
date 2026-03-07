# GreenKey

## Setup

### Environment Variables

The contact form requires SMTP credentials to send emails via Gmail.

1. Copy the example env file:
   ```bash
   cd client
   cp .env.example .env.local
   ```

2. Fill in your Gmail credentials in `client/.env.local`:
   ```
   SMTP_USER=your-gmail-address@gmail.com
   SMTP_PASS=your-gmail-app-password
   ```

   > **Note:** Use a [Gmail App Password](https://myaccount.google.com/apppasswords) (not your regular Gmail password).  
   > To generate one: enable 2-Step Verification on your Google account, then go to **Security → 2-Step Verification → App passwords**.

### Vercel Deployment

Add the following environment variables in your [Vercel project settings](https://vercel.com/docs/projects/environment-variables):

| Variable    | Description                          |
| ----------- | ------------------------------------ |
| `SMTP_USER` | Your Gmail address                   |
| `SMTP_PASS` | Your Gmail App Password               |

### Local Development

```bash
cd client
npm install
npm run dev
```
