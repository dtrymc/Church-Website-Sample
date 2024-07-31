<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JavaScript Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Interaction Example</h1>
    <p id="text">This is a paragraph of text on my webpage. Click the button to change this text.</p>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById('text').innerHTML = "You have clicked the button and changed the text!";
        }
    </script>
</body>
</html>
