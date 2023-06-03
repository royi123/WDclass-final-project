﻿<%@ Page Title="" Language="C#" MasterPageFile="~/SignupAndLogin.Master" AutoEventWireup="true" CodeBehind="Signup.aspx.cs" Inherits="FinalProject.WebForm1" ClientIDMode="Static"%>
<%--add ClientIDMode="Static" to all pages--%>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="signup.js"></script> 
    <link href="signup.css" rel="stylesheet" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body{
            background-color:#202C39;
            margin:0 auto;
        }
    </style>
    <title>Document</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <%--<div class="topnav">
        <a href="contacts.html">Contact</a>
        <a href="about.html">About Us</a>
        <div class="dropdown">
            <button class="dropbtn" ; style="border:none">posts</button>
            <div class="dropdown-content">
                <a href="compose.html">compose a new entry</a>
                <a href="viewPosts.html">view old posts</a>
            </div>
        </div>
        <a href="homePage.html">Home</a>
        <div id="title1">
            <div style="padding-top:10px">
                <img width="70px" height="70px" src="images/code (2).png" />
            </div>
        </div>
    </div>--%>
     <dialog class="modal">
        <h1>would you like to join our newsletter</h1>
        <p>in order to recieve news about this project</p>
        <button id="close-button">Close</button>
        <button id="newsletterOpen">Sign Up for our Newsletter</button>
    </dialog> 
    <h1 style="display: flex;justify-content: center;color: white;"">Sign Up</h1>
    <section id="signupPage">
      <form class="signup-form" onsubmit="return healthCheck()">
        <div style="display: flex; flex-direction: column;">
          <label>first name</label>
          <div class="input-group-1" style="display: flex;">
            <input type="text" name="name" id="input-group-1"/>
          </div>
          <p id="error-G1" style="color: red;"></p>
          <label>last name</label>
          <div class="input-group-1-1" style="display: flex;">
            <input type="text" name="Fname" id="input-group-1-1"/>
          </div>
          <p id="error-G1-1" style="color: red;"></p>
          <label>user name</label>
          <div class="input-group-2">
            <input type="text" name="Uname" id="input-group-2"/>
          </div>
          <p id="error-G2" style="color: red;"></p>
          <label>email</label>
          <div class="input-group-3">
            <input type="email" name="email" id="input-group-3"/> 
          </div>
          <p id="error-G3" style="color: red;"></p>
          <label>date of birth</label>
          <div class="input-group-4" style="display: flex;">
            <input type="date" name="Bday" id="input-group-4" style="width: 100%;" />
          </div>
          <p id="error-G4" style="color: red;"></p>
          <label>password</label>
          <div class="input-group-5" style="display: flex;">
            <input type="password" name="password" id="input-group-5" style="width: 100%;" />
          </div>
          <p id="error-G5" style="color: red;"></p>
          <label>confirm password</label>
          <div class="input-group-6" style="display: flex;">
            <input type="password" name="ConfirmPassword" id="input-group-6" style="width: 100%;" />
          </div>
          <p id="error-G6" style="color: red;"></p>
          <label>gender</label>
          <div class="input-group-7" style="display: flex;">
            <input type="radio" name="gender" id="input-group-7-1" style="width: 100%;" />
            <label for="input-group-7-1">Male</label>
          
            <input type="radio" name="gender" id="input-group-7-2" style="width: 100%;" />
            <label for="input-group-7-2">Female</label>
          
            <input type="radio" name="gender" id="input-group-7-3" style="width: 100%;" />
            <label for="input-group-7-3">Other</label>
          </div>
          
          <p id="error-G7" style="color: red;"></p>
          <label>age</label>
          <div class="input-group-8" style="display: flex;">
            <input type="number" name="age" id="input-group-8" style="width: 100%;" />
          </div>
          <p id="error-G8" style="color: red;"></p>
          <button type="submit" id="submitBtn" onclick="window.location.href=homePage.html">submit</button>
        </div>
      </form>
    </section>
</asp:Content>
