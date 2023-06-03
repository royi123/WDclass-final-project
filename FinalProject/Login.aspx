<%@ Page Title="" Language="C#" MasterPageFile="~/SignupAndLogin.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="FinalProject.WebForm2" %>
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
    <%--<dialog class="modal">
        <h1>would you like to join our newsletter</h1>
        <p>in order to recieve news about this project</p>
        <button id="close-button">Close</button>
        <button id="newsletterOpen">Sign Up for our Newsletter</button>
    </dialog>--%> 
    <h1 style="display: flex;justify-content: center;color: white;"">Sign Up</h1>
    <section id="signupPage">
      <form class="signup-form">
          <p>User Name</p>
          <input type="text" name="User_N" id="Login_UN" style="width: 100%;" />
          <input type="password" name="LoginPassword" id="Login_Password" style="width: 100%;" />
          <button type="submit" id="submitBtn" onclick="window.location.href=homePage.html" style="width: 100%;margin-top:15px">submit</button>
        </div>
      </form>
    </section>
</asp:Content>
