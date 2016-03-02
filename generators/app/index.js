'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');
var inquirer = require('inquirer');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Angular') + ' generator!'
    ));
    var prompts = [{
      name: 'appName',
      message: 'What is the name of your application?',
      required: true
    },{
      name: 'type',
      message: 'Which type of project would you like to create?',
      type: 'list',
      choices: ['Empty', 'Sample Data', { name: 'Security - Disabled Currently', disabled: true }]
    }];

    inquirer.prompt(prompts, function(props) {
      this.appName= _s.titleize(_s.slugify(props.appName));
      this.appNamespace = this.appName.replace(/-/g, '_');
      // this.appName = _s.slugify(props.appName) || 'coder-camps-js';
      // this.appDesc = props.appDesc || 'A MEAN stack application.';
      this.type = props.type;
      done();
    }.bind(this));
  },
  projectfiles: function() {
    // this.template('package.json', 'package.json');
    // this.template('bower.json', 'bower.json');
    // this.template('./views/index.html', './views/index.html');
    // this.template('typings.json', 'typings.json');

    let files = [
      './.vs/config/applicationhost.config',
      './.vs/Generator-CoderCamps-NET/v14/.suo',

      './global.json',
      './Generator-CoderCamps-NET.sln',

      './src/Generator-CoderCamps-NET/.bowerrc',
      './src/Generator-CoderCamps-NET/appsettings.json',
      './src/Generator-CoderCamps-NET/bower.json',
      './src/Generator-CoderCamps-NET/Generator-CoderCamps-NET.xproj',
      './src/Generator-CoderCamps-NET/Generator-CoderCamps-NET.xproj.user',
      './src/Generator-CoderCamps-NET/gulpfile.js',
      './src/Generator-CoderCamps-NET/package.json',
      './src/Generator-CoderCamps-NET/Project_Readme.html',
      './src/Generator-CoderCamps-NET/project.json',
      './src/Generator-CoderCamps-NET/Startup.cs',
      './src/Generator-CoderCamps-NET/tsconfig.json',
      './src/Generator-CoderCamps-NET/typings.json',

      './src/Generator-CoderCamps-NET/Controllers/HomeController.cs',
      // Migrations
      './src/Generator-CoderCamps-NET/Migrations/00000000000000_CreateIdentitySchema.cs',
      './src/Generator-CoderCamps-NET/Migrations/00000000000000_CreateIdentitySchema.Designer.cs',
      './src/Generator-CoderCamps-NET/Migrations/ApplicationDbContextModelSnapshot.cs',
      // Models
      './src/Generator-CoderCamps-NET/Models/ApplicationDbContext.cs',
      './src/Generator-CoderCamps-NET/Models/ApplicationUser.cs',
      // Properties
      './src/Generator-CoderCamps-NET/Properties/launchSettings.json',
      // Services
      './src/Generator-CoderCamps-NET/Services/IEmailSender.cs',
      './src/Generator-CoderCamps-NET/Services/ISmsSender.cs',
      './src/Generator-CoderCamps-NET/Services/MessageServices.cs',
      // View Models -- Account
      './src/Generator-CoderCamps-NET/ViewModels/Account/ExternalLoginConfirmationViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/ForgotPasswordViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/LoginViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/RegisterViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/ResetPasswordViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/SendCodeViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Account/VerifyCodeViewModel.cs',
      // View Models -- Manage
      './src/Generator-CoderCamps-NET/ViewModels/Manage/AddPhoneNumberViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/ChangePasswordViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/ConfigureTwoFactorViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/FactorViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/IndexViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/ManageLoginsViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/RemoveLoginViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/SetPasswordViewModel.cs',
      './src/Generator-CoderCamps-NET/ViewModels/Manage/VerifyPhoneNumberViewModel.cs',
      // Views
      './src/Generator-CoderCamps-NET/Views/Home/Index.cshtml',
      // wwwroot
      './src/Generator-CoderCamps-NET/wwwroot/_references.js',
      './src/Generator-CoderCamps-NET/wwwroot/favicon.ico',
      './src/Generator-CoderCamps-NET/wwwroot/web.config',
      // wwwroot -- css
      './src/Generator-CoderCamps-NET/wwwroot/css/site.css',
      './src/Generator-CoderCamps-NET/wwwroot/css/site.min.css',
      // wwwroot -- images
      './src/Generator-CoderCamps-NET/wwwroot/images/ASP-NET-Banners-01.png',
      './src/Generator-CoderCamps-NET/wwwroot/images/ASP-NET-Banners-02.png',
      './src/Generator-CoderCamps-NET/wwwroot/images/Banner-01-Azure.png',
      './src/Generator-CoderCamps-NET/wwwroot/images/Banner-02-VS.png',
      // wwwroot -- js
      './src/Generator-CoderCamps-NET/wwwroot/js/site.js',
      './src/Generator-CoderCamps-NET/wwwroot/js/site.min.js',
      // wwwroot -- ngApp
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/about.html',
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/app.ts',
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/controllers.ts',
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/home.html',
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/notFound.html',
      './src/Generator-CoderCamps-NET/wwwroot/ngApp/services.ts',
    ];

    for (let file of files) {
      this.template(file, file);
    }
  },
  install: function() {
    process.chdir(process.cwd() + '/src/Generator-CoderCamps-NET');
    // this.installDependencies();
    this.spawnCommandSync('typings', ['install']);
  }
});
