export default function User () {
    var users = require("./users.json");
    var thead = ["Serial No.","Name (first name last name)","Email","Address(number, street)"].map((a,k3) => <th key={k3}>{a}</th>)
    var tbody = users.map( (user,k1) => {
        var serial = k1 + 1;
        var email = user["email"];
        var name = user["name"]["firstname"] +" "+ user["name"]["lastname"];
        var address = user["address"]["number"] + "," + user["address"]["street"];

        var row = <tr key={k1}>{[serial,name,email,address].map((a,k2) => <td key={k2}>{a}</td>)}</tr>;
        return row;
    })
    return <table><thead><tr>{thead}</tr></thead><tbody>{tbody}</tbody></table>
}