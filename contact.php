<?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];
        
            $to = "mounaaouaidjia91@gmail.com"; // Replace with your email address
            $subject = "New message from $name";
            $headers = "From: $email";
        
            mail($to, $subject, $message, $headers);
        
            echo "Message sent successfully!";
        }
        ?>