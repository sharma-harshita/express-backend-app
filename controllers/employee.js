const get = (req, res) => {
    res.send([
        {id:1, name:"pooja"},
        {id:2, name:"janaki"},
        {id:3, name:"mani"},
    ])
}

// if you are exporting like this then you can import also with get function only
// module.exports = get

// if you are exporting like this then you can access by using employeeGet
module.exports.employeeGet = get
