# Node.js Mail Tester
This project is a simple Node.js application that sends an email to a recipient using the Mailgun API. The objective of this project is to test how an email template appears once it has been sent to the recipient's email address.

## Installation
1. Clone this repository.
2. Run _npm install_ to install the project's dependencies.
3. Create a _.env_ file in the root of the project and add your Mailgun API key and domain:

```
MAILGUN_API_KEY=<your mailgun api key>
```

```
MAILGUN_DOMAIN=<domain name>
```

```
MAILGUN_FROM_EMAIL=<from name><from email>
```

```
PORT=<port to run the app.js on>
```

4. Run npm run dev to start the development server using Nodemon.

## Usage
1. Open POSTMAN
2. Add a request for url: http://localhost:PORT/api/v1/mailsender/sendemail
3. Add _email_ in the body as raw json

```
{
    "email": "m.ahmedk287@gmail.com"
}
```
4. Check the recipient's email inbox for the test email.

## License
This project is licensed under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/m-ahmedk/mail-sender/blob/main/LICENSE).