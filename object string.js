Creating an Object from a JSON String

<!DOCTYPE html>

<html>

<body>

<h2>Creating an Object from a JSON String</h2>

<p id="demo"></p>

<script>

const txt = "{"name":"RAM", "age" 30, "city" "New Ghaziabad")'

const obj = JSON.parse(txt);

document.getElementById("demo").innerHTML = obj.name + "," + obj.age;

</script>

</body>

</html>
