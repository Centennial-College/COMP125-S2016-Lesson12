/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date August 29, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    function readAddressBook() {
        $.getJSON("contacts.json", (data) => {
            var addressbook = data;
            var contacts = addressbook.contacts;

            contacts.forEach(function (contact) {
                console.log(contact);
            }, this);
        })
    }

    function setActivePage() {
        switch (document.title) {
            case "Home":
                document.getElementById("index").setAttribute("class", "active");
                break;
            case "About Me":
                document.getElementById("about").setAttribute("class", "active");
                break;
            case "Projects":
                document.getElementById("projects").setAttribute("class", "active");
                break;
            case "Contact Me":
                document.getElementById("contact").setAttribute("class", "active");
                break;
        }
    }

    function loadFooter() {
        $('#footer').load('Partials/footer.html', () => {
            $('#year').text(new Date().getFullYear())
        })
    }

    function loadNavBar() {
        $('#mainNav').load('Partials/navbar.html', () => {
            $('#projects').replaceWith('<li id= "gallery" > <a href="gallery.html"><i class="fa fa-picture-o fa-lg"></i> Gallery</a></li>')
            setActivePage()
        })

    }

    // app entry function
    function init() {
        loadNavBar();

        readAddressBook();

        loadFooter();

        
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();