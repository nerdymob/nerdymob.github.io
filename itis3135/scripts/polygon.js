let numberOfSides = prompt("How many sides does your polygon have?(0-10)");
let newNumberOfSides = validateEntry(numberOfSides);

getShape(newNumberOfSides);

function getShape(numberOfSides) 
{
    if (numberOfSides == 10)
    {
        return alert("hendecagon");
    } 
    else if (numberOfSides == 9)
    {
        return alert("enneagon");
    } 
    else if (numberOfSides == 8)
    {
        return alert("octagon");
    } 
    else if (numberOfSides == 7)
    {
        return alert("heptagon");
    } 
    else if (numberOfSides == 6)
    {
        return alert("hexagon");
    } 
    else if (numberOfSides == 5)
    {
        return alert("pentagon");
    } 
    else if (numberOfSides == 4)
    {
        return alert("tetragon");
    } 
    else if (numberOfSides == 3)
    {
        return alert("trigon");
    } 
    else if (numberOfSides == 2)
    {
        return alert("digon");
    } 
    else if (numberOfSides == 1)
    {
        return alert("henagon");
    } 
    else 
    {
        return alert("Each polygon has sides")
    }
}
 
function getShape2(numberOfSides) 
{
    numberOfSides = prompt("How many sides does your polygon have?(0-10)");  
    numberOfSides = validateEntry(numberOfSides);
    if (numberOfSides == 10)
    {
        return alert("hendecagon");
    } 
    else if (numberOfSides == 9)
    {
        return alert("enneagon");
    } 
    else if (numberOfSides == 8)
    {
        return alert("octagon");
    } 
    else if (numberOfSides == 7)
    {
        return alert("heptagon");
    } 
    else if (numberOfSides == 6)
    {
        return alert("hexagon");
    } 
    else if (numberOfSides == 5)
    {
        return alert("pentagon");
    } 
    else if (numberOfSides == 4)
    {
        return alert("tetragon");
    } 
    else if (numberOfSides == 3)
    {
        return alert("trigon");
    } 
    else if (numberOfSides == 2)
    {
        return alert("digon");
    } 
    else if (numberOfSides == 1)
    {
        return alert("henagon");
    } 
    else 
    {
        return alert("Each polygon has sides")
    }
}

function validateEntry(numberOfSides)
{
    var newNumberOfSides = Math.abs(numberOfSides);
    newNumberOfSides = Math.round(newNumberOfSides);
    while (newNumberOfSides > 10)
    {
        if(newNumberOfSides < 0 || newNumberOfSides > 10)
        {
            newNumberOfSides = prompt("Enter a number of sides between 0 and 10");
        }
    } 
    return newNumberOfSides;
}   
