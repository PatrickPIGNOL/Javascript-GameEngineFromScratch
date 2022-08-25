const express = require("express");
const app = express();
app.use(express.static("public"));

const listener = app.listen
(
	process.env.PORT,
	()=>
	{
		console.log
		(
			"Your app is listening on port " + 
			listener.address().port
		);
	}
);

/*
app.get
(
    "/", 
    (request, response) =>
    {
        let vHTML = mHTMLHeader("Javascript-GameEngine - Accueil");
        vHTML = vHTML + mWelcome() + mHTMLFooter();
        response.send(vHTML);
    }
);
*/

app.get
(
    "/login", 
    (request, response) =>
    {
        let vHTML = mHTMLHeader("Javascript-GameEngine - Login");
        vHTML = vHTML + mLogin() + mHTMLFooter();
        response.send(vHTML);
    }
);

app.get
(
    "/signin", 
    (request, response) =>
    {
        let vHTML = mHTMLHeader("Javascript-GameEngine - SignIn");
        vHTML = vHTML + mLogin() + mHTMLFooter();
        response.send(vHTML);
    }
);

app.get
(
    "/", 
    (request, response) =>
    {
        let vHTML = mHTMLHeader("Game");
        vHTML = vHTML + mGame() + mHTMLFooter();
        response.send(vHTML);
    }
);

function mHTMLHeader(pTitle) 
{
    let vHTML =
    `<!DOCTYPE html>
    <html id='html'>
    <head>
    <meta charset='utf-8'>
    <title>
        ${pTitle}
    </title>
	<script src=//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.3.10/seedrandom.min.js></script>
    </head>
    <body>`;
    return vHTML;
}

function mWelcome()
{
	let vHTML = `Login - SignIn`;
	return vHTML;
}

function mLogin()
{
	let vHTML = `Login`;
	return vHTML;
}

function mGame()
{
	let vHTML = `
 	<canvas id='canvas'></canvas>
    <script type='module' src='./Loader.js'></script>`;
	return vHTML;
}

function mHTMLFooter() 
{
    let vHTML = "</body></html>";
    return vHTML;
}