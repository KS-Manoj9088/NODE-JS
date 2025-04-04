const express = require("express")
const path = require("path")

const app = express()
const PORT = 3000
const publicFolderPath = path.join(__dirname,"public");
app.use(express.static(publicFolderPath));

const branches =  {
    cse: { name: "Computer Science and Engineering", hod: "Dr.K.S.Manoj Kumar", seats: 120 },
    ece: { name: "Electronics and Communication Engineering", hod: "Dr.K.Rakesh", seats: 100 },
    mech: { name: "Mechanical Engineering", hod: "Dr.K.Narasingarao", seats: 80 },
    civil: { name: "Civil Engineering", hod: "Dr.D.Yadav", seats: 70 }
};


// Home page - to display college image
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Anits College</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <nav>
                <h1>ANITS College</h1>
                <ul>
                    <li><a href="/branch/cse">CSE</a></li>
                    <li><a href="/branch/ece">ECE</a></li>
                    <li><a href="/branch/mech">MECH</a></li>
                    <li><a href="/branch/civil">CIVIL</a></li>
                </ul>
            </nav>
            <div class="container">
                <h2>Welcome to ANITS Engineering College</h2>
                <img src="/anits.jpeg" alt="Anits College">
                <p>Explore our different branches from the navigation bar above.</p>
            </div>
        </body>
        </html>
    `);
});


// Dynamic Route with help of URL Binding
app.get('/branch/:dept', (req, res) => {
    const dept = req.params.dept.toLowerCase();
    const branch = branches[dept];

    if (branch) {
        res.send(`
            <html>
            <head>
                <title>${branch.name}</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <nav>
                    <h1>ANITS College</h1>
                    <ul>
                        <li><a href="/branch/cse">CSE</a></li>
                        <li><a href="/branch/ece">ECE</a></li>
                        <li><a href="/branch/mech">MECH</a></li>
                        <li><a href="/branch/civil">CIVIL</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <h2>${branch.name}</h2>
                    <p><strong>Head of Department:</strong> ${branch.hod}</p>
                    <p><strong>Total Seats:</strong> ${branch.seats}</p>
                    <br>
                    <a href="/">⬅️ Back to Home</a>
                </div>
            </body>
            </html>
        `);
    } else {
        res.status(404).send(`
            <html>
            <head>
                <title>Branch Not Found</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <nav>
                    <h1>ANITS College</h1>
                    <ul>
                        <li><a href="/branch/cse">CSE</a></li>
                        <li><a href="/branch/ece">ECE</a></li>
                        <li><a href="/branch/mech">MECH</a></li>
                        <li><a href="/branch/civil">CIVIL</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <h2>Branch Not Found</h2>
                    <p>Oops! The department you are looking for doesn't exist.</p>
                    <a href="/">⬅️ Go Back to Home</a>
                </div>
            </body>
            </html>
        `);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

