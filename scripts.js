document.documentElement.setAttribute('data-theme', 'light')
        function onLoad() {
            document.getElementById('light').hidden = true
            console.log("Это консоль")
            if (localStorage.theme == "1") {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }
        function lighttheme() {
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById('light').hidden = true;
            document.getElementById('dark').hidden = false;
            localStorage.theme='0'
        }
        function darktheme() {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('dark').hidden = true;
            document.getElementById('light').hidden = false;
            localStorage.theme='1'
        }