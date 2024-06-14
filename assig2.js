const { log } = require("console");
const { lookupService } = require("dns/promises");
const http = require("http");
const fs = require("fs")
let students = JSON.parse(fs.readFileSync("./student.JSON"));
let courses = JSON.parse(fs.readFileSync("./course.JSON"));
let departments = JSON.parse(fs.readFileSync("./department.JSON"))


const server = http
    .createServer((req, res) => {
        const { url, method } = req // destrucion
        res.setHeader('content-type', 'application/JSON');

        //students//
        if (url == '/student' && method == 'GET') { // 1.get students read
            res.end(JSON.stringify(students)); // convert to json for response




        } else if (url == '/student' && method == 'POST') {        //2. add students
            req.on('data', (chunk) => {          // get data from post 

                let add_student = JSON.parse(chunk) // convert to javascript

                console.log(add_student)
                students.push(add_student)

                fs.writeFileSync('./student.JSON', JSON.stringify(students))
            })

            res.end(JSON.stringify({ massege: 'add success' }));







        } else if (url.startsWith('/student/') && method == 'PUT') {        //3. UPDATE students
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = students.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })

            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            req.on('data', (chunk) => {          // get data from postman body
                let user = JSON.parse(chunk)                 // convert json to js
                students[index] = user       // update student
                fs.writeFileSync('./student.JSON', JSON.stringify(students))
                res.end(JSON.stringify({ massege: 'UPDATE success' }));

            })
        }

        else if (url.startsWith('/student/') && method == 'DELETE') {        //4. DELETE student
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = students.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            students.splice(index, 1)
            fs.writeFileSync('./student.JSON', JSON.stringify(students))
            return res.end(JSON.stringify({ massege: 'delete success' }));
        }


        //search for student by id //
        else if (url.startsWith('/student/search/') && method == 'GET') {
            let urlid = Number(url.split("/")[3]) // get id from url
            let index = students.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            res.end(JSON.stringify(students[index]))





        }







        //course//
        else if (url == '/course' && method == 'GET') { // 1.get course read
            res.end(JSON.stringify(courses)); // convert to json for response

        }


        else if (url == '/course' && method == 'POST') {        //2. add courses
            req.on('data', (chunk) => {          // get data from post 
                let add_course = JSON.parse(chunk) // convert to javascript
                console.log(add_course)
                courses.push(add_course)

                fs.writeFileSync('./course.JSON', JSON.stringify(courses))
            })

            res.end(JSON.stringify({ massege: 'add success' }));








        } else if (url.startsWith('/course/') && method == 'PUT') {        //3. UPDATE course
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = courses.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })

            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            req.on('data', (chunk) => {          // get data from postman body
                let user = JSON.parse(chunk)                 // convert json to js
                courses[index] = user       // update student
                fs.writeFileSync('./course.JSON', JSON.stringify(students))
                res.end(JSON.stringify({ massege: 'UPDATE success' }));

            })


        }



        else if (url.startsWith('/course/') && method == 'DELETE') {        //4. DELETE course
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = courses.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            departments.splice(index, 1)
            fs.writeFileSync('./course.JSON', JSON.stringify(courses))
            return res.end(JSON.stringify({ massege: 'delete success' }));
        }







        //search for course by id //
        else if (url.startsWith('/course/search/') && method == 'GET') {
            let urlid = Number(url.split("/")[3]) // get id from url
            let index = courses.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            res.end(JSON.stringify(courses[index]))





        }





        //department/


        else if (url == '/department' && method == 'GET') { // 1.get department read
            res.end(JSON.stringify(departments)); // convert to json for response

        }







        else if (url == '/department' && method == 'POST') {        //2. add department
            req.on('data', (chunk) => {          // get data from post 
                let add_department = JSON.parse(chunk) // convert to javascript
                console.log(add_department)
                courses.push(add_department)

                fs.writeFileSync('./department.JSON', JSON.stringify(departments))
            })

            res.end(JSON.stringify({ massege: 'add success' }));








        }





        else if (url.startsWith('/department/') && method == 'PUT') {        //3. UPDATE department
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = departments.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })

            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            req.on('data', (chunk) => {          // get data from postman body
                let user = JSON.parse(chunk)                 // convert json to js
                departments[index] = user       // update department
                fs.writeFileSync('./department.JSON', JSON.stringify(departments))
                res.end(JSON.stringify({ massege: 'UPDATE success' }));

            })


        }




        else if (url.startsWith('/department/') && method == 'DELETE') {        //4. DELETE department
            let urlid = Number(url.split("/")[2]) // get id from url
            let index = departments.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            departments.splice(index, 1)
            fs.writeFileSync('./department.JSON', JSON.stringify(departments))
            return res.end(JSON.stringify({ massege: 'delete success' }));
        }



        //search for course by id //
        else if (url.startsWith('/department/search/') && method == 'GET') {
            let urlid = Number(url.split("/")[3]) // get id from url
            let index = departments.findIndex((x) => {
                return x.id == urlid                     // get the id == urlid

            })
            if (index == -1) {

                res.statusCode = 404
                return res.end(JSON.stringify({ massege: 'id not found' }));

            }
            res.end(JSON.stringify(departments[index]))





        }















        else {

            res.end(('not found'));
        }


    })
    .listen(
        3000,
        '127.0.0.1',
        () => {
            console.log('server is fine');
        }
    );

